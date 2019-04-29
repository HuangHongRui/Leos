import React from "react";
import { Link } from "react-router-dom";
import Pagination from "src/component/Pagination";
import Author from "src/component/Author";
import cn from "classnames";
import "./index.scss";

class Article extends React.Component<PropsType, StatesType> {
  constructor(props) {
    super(props);
    this.state = {
      hoverTitleColor: false,
      hoverArticleColor: false,
      articleId: props.location.search
    };
    this.onHoverTitle = this.onHoverTitle.bind(this);
    this.onHoverArticle = this.onHoverArticle.bind(this);
  }

  hopeData = [{
    id: 437955529,
    title: "文章标题",
    date: "2019-04-27",
    labels: [{
      name: "Blog",
      color: "#fef000"
    }],
    description: "简介描述",
    content: "文章内容."
  }]

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
      articleId: id
    })
  }

  render() {
    let {hoverTitleColor, hoverArticleColor, articleId} = this.state;
    const authorStyle = cn({ "d-vanish": articleId })
    const articleListStyle = cn("article-list", { "d-vanish": articleId })

    return (
      <div className="article-content content">
        <div className={articleListStyle}>

          {this.hopeData.map((data, i) => (
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
                  {data.description}
                </p>
              </Link>
              <span>{data.date}</span>
            </div>
          ))}
          <Pagination/>

        </div>
        <Author classNames={authorStyle} />
      </div>
    );
  }
}

export default Article;

interface PropsType {

}
interface StatesType {
  hoverTitleColor: Boolean | String | Number
  hoverArticleColor: Boolean | String | Number
  articleId: String | Number
}