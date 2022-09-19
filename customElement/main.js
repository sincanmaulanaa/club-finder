import "../src/components/ArticleItem.js";
import article from "./article-data.js";

const containerElement = document.querySelector(".container");

const articleItemElement = document.createElement("article-item");
articleItemElement.article = article;

containerElement.appendChild(articleItemElement);
