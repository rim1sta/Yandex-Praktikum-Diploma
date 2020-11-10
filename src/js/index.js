import "../pages/index.css";
import DataStorage from "./modules/DataStorage.js";
import NewsCard from "./components/NewsCard.js";
import NewsCardList from "./components/NewsCardList.js";
import NewsApi from "./modules/NewsApi.js";
import SearchInput from "./components/SearchInput.js";
import {
  renderLoading,
  result,
  renderThreeCards,
  deleteButton,
} from "./utils/functions.js";
import {
  FIRST_ARG,
  SECOND_ARG,
  API_KEY,
  API_URL,
  CURRENT_DATE,
  WEEK_AGO,
  PAGE_SIZE,
} from "./constants/constants";

let firstCount = renderThreeCards(3, 3);
let secondCount = renderThreeCards(6, 3);

const newsButton = document.querySelector(".news__button");
const errorMeassages = document.querySelector(".searcher__error");
const searchButton = document.querySelector(".searcher__button");
const errorSection = document.querySelector(".search-error");
const preloader = document.querySelector(".preloader");
const newsSection = document.querySelector(".news");
const searchForm = document.forms.searcherForm;
const searcherInput = document.querySelector(".searcher__input");
const newsList = document.querySelector(".news__list");

const newsCardList = new NewsCardList(newsList, createNewsCard);
const newsApi = new NewsApi(
  API_URL,
  PAGE_SIZE,
  searcherInput,
  WEEK_AGO,
  CURRENT_DATE,
  API_KEY
);
const dataStorage = new DataStorage();
const searchInput = new SearchInput(
  searcherInput,
  searchButton,
  errorMeassages
);

//creating card
function createNewsCard(dataForElement) {
  const newsCard = new NewsCard(dataForElement);
  return newsCard.create();
}

//render cards after request
function searchNews() {
  event.preventDefault();
  newsCardList.updateList();
  renderLoading(true, preloader);
  firstCount = renderThreeCards(3, 3);
  secondCount = renderThreeCards(6, 3);
  deleteButton(dataStorage.getData());
  newsApi
    .getNews()

    .then((res) => {
      dataStorage.saveData(res.articles);
      console.log(res.articles.length === 0);

      result(res.articles.length === 0, newsSection, errorSection);
      newsCardList.render(dataStorage.getData(res), FIRST_ARG, SECOND_ARG);
      deleteButton(dataStorage.getData(res));
    })
    .catch((err) => {
      console.log(`ошибка:${err}. Запрос не выполнен`);
    })
    .finally(() => {
      renderLoading(false, preloader);
    });
}

// event listeners
searcherInput.addEventListener("input", () => {
  searchInput.checkInputValidity();
});

searchForm.addEventListener("submit", (event) => {
  searchInput.checkInputValidity();
  searchInput.setSubmitButtonState(true);
  searchNews();
  searchForm.reset();
  searchInput.setSubmitButtonState(false);
  deleteButton(dataStorage.getData());
});

newsButton.addEventListener("click", (event) => {
  event.preventDefault();
  newsCardList.render(dataStorage.getData(), firstCount(), secondCount());
  deleteButton(dataStorage.getData());
});



