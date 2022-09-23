import "./ArticleItem.js";

class ArticleList extends HTMLElement {
  set articles(articles) {
    this._articles = articles;
    this.render();
  }

  render() {
    this._articles.forEach((article) => {
      const articleItemElement = document.createElement("article-item");

      // Memanggil fungsi setter article() pada article-item
      articleItemElement.article = article;
      this.appendChild(articleItemElement);
    });
  }
}

customElements.define("article-list", ArticleList);