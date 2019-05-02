import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import CodeBlock from "src/component/Markdown/code-block";
import { Link } from "react-router-dom";
import Pagination from "src/component/Pagination";
import Author from "src/component/Author";
import cn from "classnames";
import { fetchGetIssues } from "src/request"
import "./index.scss";

class Article extends React.Component<PropsType, StatesType> {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      hoverTitleColor: false,
      hoverArticleColor: false,
      articleId: props.location.search,
      article: {}
    };
    this.onHoverTitle = this.onHoverTitle.bind(this);
    this.onHoverArticle = this.onHoverArticle.bind(this);
  }

  componentDidMount() {
    this.getIssuesa();
  }

  getIssuesa = async() => {
    const res = await fetchGetIssues()
    if (res.status)
      this.setState({
        issues: res.data
      })
  }

  onHoverTitle = (i?: Number) => {
    if (i || i === 0) {
      this.setState({
        hoverTitleColor: i
      });
      return;
    }
    this.setState({
      hoverTitleColor: false
    });
  }

  onHoverArticle = (i?: Number) => {
    if (i || i === 0) {
      this.setState({
        hoverArticleColor: i
      });
    }
    this.setState({
      hoverArticleColor: false
    });
  }

  readArticle = (id) => {
    this.setState({
      articleId: id,
      article: this.state.issues.find((item) => item.id === id)
    })
  }

  render() {
    let {hoverTitleColor, hoverArticleColor, articleId, issues, article} = this.state;
    const authorStyle = cn({ "d-vanish": articleId })
    const articleListStyle = cn("article-list", { "d-vanish": articleId })
    const markdownStyle = cn("result-pane rely-bag", {"d-vanish": !articleId})
    
    return (
      <div className="article-wrap content">
        <div className={articleListStyle}>

          {issues.map((data, i) => (
            <div key={i} className="article-item">
              <Link
                to={{ pathname: 'article', search: `?id=${data.id}` }}
                onClick={() => this.readArticle(data.id)}
              >
                <h4
                  onMouseEnter={() => this.onHoverTitle(i)}
                  onMouseLeave={() => this.onHoverTitle()}
                  className={hoverTitleColor === i || hoverArticleColor === i ? "hover-select" : ""}
                >
                  {data.title}
                </h4>
                <h6
                  onMouseEnter={() => this.onHoverTitle(i)}
                  onMouseLeave={() => this.onHoverTitle()}
                  className={hoverTitleColor === i || hoverArticleColor === i ? "hover-select" : ""}
                >
                  {data.labels.map((item) => item.name)}
                </h6>
                <p
                  onMouseEnter={() => this.onHoverArticle(i)}
                  onMouseLeave={() => this.onHoverArticle()}
                  className={hoverArticleColor === i ? "hover-select" : ""}
                >
                  {data.intro}
                </p>
              </Link>
              <span>{data.date}</span>
            </div>
          ))}
          <Pagination/>

        </div>
        <Author classNames={authorStyle} />

        <ReactMarkdown
          className={markdownStyle}
          source={article.body}
          escapeHtml={false}
          renderers={{code: CodeBlock}}
        />
      </div>
    );
  }
}

export default Article;

interface PropsType {}

interface StatesType {
  hoverTitleColor: Boolean | String | Number
  hoverArticleColor: Boolean | String | Number
  articleId: String | Number
  article?: {body?: String}
  issues?: {
    id: string
    body: String
    date: String
    title: String
    intro: String
    labels: [{ color: String, name: String }]
  }[]
}