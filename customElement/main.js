import "../src/components/ArticleList.js";
import articles from "./article-data.js";

const articleListElement = document.createElement("article-list");
articleListElement.articles = articles;

document.body.appendChild(articleListElement);
