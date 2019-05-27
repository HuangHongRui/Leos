import React from "react";
import qs from "qs";
import cn from "classnames";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown/with-html";
import Author from "src/component/Author";
import { fetchGetIssues } from "src/request"
import Pagination from "src/component/Pagination";
import CodeBlock from "src/component/Markdown/code-block";
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

  static getDerivedStateFromProps(nextProps: nextProps, prevState: prevState): void | {} {
    if (prevState.articleId !== nextProps.location.search) {
      return {
        articleId: nextProps.location.search
      }
    }
    return;
  }

  componentDidMount() {
    this.getIssuesa();
  }

  getIssuesa = async() => {
    const {id} = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    const res = await fetchGetIssues()
    if (res.status) {
      this.setState({
        issues: res.data,
        article: id ? res.data.find(item => (item.id == id)) : {}
      })
    }
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

  getArticle = () => {
    let {article, articleId} = this.state;
    if (articleId && !article.body) {
      this.getIssuesa()
    }
    return article.body
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
                <h6>
                  {data.labels.map((item) => {
                    return <span
                      style={{ background: `#${item.color}` }}
                      className="labels"
                    >{item.name}</span>
                  })}
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
          source={this.getArticle()}
          escapeHtml={false}
          renderers={{code: CodeBlock}}
        />
      </div>
    );
  }
}

// export default connect(a, b)(Article as any);
export default Article;

interface PropsType {
  location: {
    search: String
  }
}

interface nextProps {
  location: {
    search: string;
  }
}

interface prevState {
  articleId: string;
}

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