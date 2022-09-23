import DataSource from "../data/data-source.js";
import "../components/SearchBar.js";
import "../components/ClubList.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const clubListElement = document.querySelector("club-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

  let imageFigureElement = document.querySelector("image-figure");
  if (!imageFigureElement) {
    imageFigureElement = document.createElement("image-figure");
    document.body.appendChild(imageFigureElement);
  }

  setTimeout(() => {
    imageFigureElement.setAttribute("caption", "Gambar 1");
  }, 1000);

  setTimeout(() => {
    imageFigureElement.remove();
  }, 3000);
};

export default main;
