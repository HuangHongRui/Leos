import React from "react";
import { Link } from "react-router-dom";
import Pagination from "src/component/Pagination";
import Author from "src/component/Author";
import "./index.scss";

// tslint:disable-next-line
class Article extends React.Component<any, any> {
// tslint:disable-next-line
  constructor(props: any) {
    super(props);
    this.state = {
      hoverTitleColor: false,
      hoverArticleColor: false
    };
    this.onHoverTitle = this.onHoverTitle.bind(this);
    this.onHoverArticle = this.onHoverArticle.bind(this);
  }

  mokeData = [
    {
      caption: "主题",
      title: "副题",
      intro: "很很多字很多字很多字很多字很多字很多字很多字很多字很多字多字",
      date: "2018/2/2",
      address: "/"
    },
    {
      caption: "饿了么的 PWA 升级实践",
      title: "Upgrading Ele.me to Progressive Web App",
// tslint:disable-next-line
      intro: "很荣幸在今年 2 月到 5 月的时间里，以顾问的身份加入饿了么，参与 PWA 的相关工作。这篇文章其实最初是在以英文写作发表在 medium 上的：Upgrading Ele.me to Progressive Web Apps，获得了一定的关注。所以也决定改写为中文版本再次分享出来，希望能对你有所帮助 ;) 本文首发于 CSDN 与《程序员》2017 年 7...",
      date: "2018/2/2",
      address: "/"
    }
  ];

  issuesData = [
    {
      "url": "https://api.github.com/repos/HuangHongRui/Leos/issues/5",
      "repository_url": "https://api.github.com/repos/HuangHongRui/Leos",
      "labels_url": "https://api.github.com/repos/HuangHongRui/Leos/issues/5/labels{/name}",
      "comments_url": "https://api.github.com/repos/HuangHongRui/Leos/issues/5/comments",
      "events_url": "https://api.github.com/repos/HuangHongRui/Leos/issues/5/events",
      "html_url": "https://github.com/HuangHongRui/Leos/issues/5",
      "id": 437955529,
      "node_id": "MDU6SXNzdWU0Mzc5NTU1Mjk=",
      "number": 5,
      "title": "文章标题",
      "user": {
        "login": "HuangHongRui",
        "id": 26321899,
        "node_id": "MDQ6VXNlcjI2MzIxODk5",
        "avatar_url": "https://avatars1.githubusercontent.com/u/26321899?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/HuangHongRui",
        "html_url": "https://github.com/HuangHongRui",
        "followers_url": "https://api.github.com/users/HuangHongRui/followers",
        "following_url": "https://api.github.com/users/HuangHongRui/following{/other_user}",
        "gists_url": "https://api.github.com/users/HuangHongRui/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/HuangHongRui/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/HuangHongRui/subscriptions",
        "organizations_url": "https://api.github.com/users/HuangHongRui/orgs",
        "repos_url": "https://api.github.com/users/HuangHongRui/repos",
        "events_url": "https://api.github.com/users/HuangHongRui/events{/privacy}",
        "received_events_url": "https://api.github.com/users/HuangHongRui/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 1338304016,
          "node_id": "MDU6TGFiZWwxMzM4MzA0MDE2",
          "url": "https://api.github.com/repos/HuangHongRui/Leos/labels/Blog",
          "name": "Blog",
          "color": "fef000",
          "default": false
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [],
      "milestone": null,
      "comments": 0,
      "created_at": "2019-04-27T15:38:47Z",
      "updated_at": "2019-04-27T15:38:47Z",
      "closed_at": null,
      "author_association": "OWNER",
      "body": "**简介描述**\r\n---\r\n\r\n文章内容."
    }
  ];

// tslint:disable-next-line
  onHoverTitle(i?: any) {
    if (!isNaN(i)) {
      this.setState({
        hoverTitleColor: i
      });
    } else {
      this.setState({
        hoverTitleColor: false
      });
    }
  }

// tslint:disable-next-line
  onHoverArticle(i?: any) {
    if (!isNaN(i)) {
      this.setState({
        hoverArticleColor: i
      });
    } else {
      this.setState({
        hoverArticleColor: false
      });
    }
  }

  render() {
    let {hoverTitleColor, hoverArticleColor} = this.state;
    return (
      <div className="article-content content">
        <div className="article-list">
          {/*{*/}
            {/*this.mokeData && this.mokeData.map((data, i) => (*/}
              {/*<div key={i} className="article-item">*/}
                {/*<Link to={data.address}>*/}
                  {/*<h4*/}
                    {/*onMouseEnter={() => this.onHoverTitle(i)}*/}
                    {/*onMouseLeave={this.onHoverTitle}*/}
                    {/*className={hoverTitleColor === i || hoverArticleColor === i ? "hover-select" : ""}*/}
                  {/*>*/}
                    {/*{data.caption}*/}
                  {/*</h4>*/}
                  {/*<h6*/}
                    {/*onMouseEnter={() => this.onHoverTitle(i)}*/}
                    {/*onMouseLeave={this.onHoverTitle}*/}
                    {/*className={hoverTitleColor === i || hoverArticleColor === i ? "hover-select" : ""}*/}
                  {/*>*/}
                    {/*{data.title}*/}
                  {/*</h6>*/}
                  {/*<p*/}
                    {/*onMouseEnter={() => this.onHoverArticle(i)}*/}
                    {/*onMouseLeave={this.onHoverArticle}*/}
                    {/*className={hoverArticleColor === i ? "hover-select" : ""}*/}
                  {/*>*/}
                    {/*{data.intro}*/}
                  {/*</p>*/}
                {/*</Link>*/}
                {/*<span>{data.date}</span>*/}
              {/*</div>*/}
            {/*))*/}
          {/*}*/}
          {
            this.issuesData.map((data, i) => (
              <div key={i} className="article-item">
                <Link to={data.url}>
                  <h4
                    onMouseEnter={() => this.onHoverTitle(i)}
                    onMouseLeave={this.onHoverTitle}
                    className={hoverTitleColor === i || hoverArticleColor === i ? "hover-select" : ""}
                  >
                    {data.title}
                  </h4>
                  <h6
                    onMouseEnter={() => this.onHoverTitle(i)}
                    onMouseLeave={this.onHoverTitle}
                    className={hoverTitleColor === i || hoverArticleColor === i ? "hover-select" : ""}
                  >
                    {data.labels.map(e => e.name)}
                  </h6>
                  <p
                    onMouseEnter={() => this.onHoverArticle(i)}
                    onMouseLeave={this.onHoverArticle}
                    className={hoverArticleColor === i ? "hover-select" : ""}
                  >
                    {data.body.match(/\*\*(.+)\*\*\r\n---/)[1]}
                  </p>
                </Link>
                <span>{data.created_at.match(/^\d+[-]\d.[-]\d./g)[0]}</span>
              </div>
            ))
          }
          <Pagination/>
        </div>
        <Author/>
      </div>
    );
  }
}

export default Article;