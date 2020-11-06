import "../pages/index.css";
import DataStorage from "./modules/DataStorage.js";
import NewsCard from "./components/NewsCard.js";
import NewsCardList from "./components/NewsCardList.js";
import NewsApi from "./modules/NewsApi.js";
import SearchInput from "./components/SearchInput.js";
import { visuable, renderLoading } from "./utils/functions.js";

const newsSection = document.querySelector(".news");
const searchForm = document.forms.searcherForm;
const searchInput = document.querySelector(".searcher__input");
const newsList = document.querySelector(".news__list");
const NODE_ENV = process.env.NODE_ENV === "production";
const API_KEY = "030fbd67018d48f4abc6d7fec7d147f7";
const API_URL =
  NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "http://newsapi.org/v2/everything?";

const newsCardList = new NewsCardList(newsList, createNewsCard);
const newsApi = new NewsApi(API_URL, searchInput, "2020-11-05", API_KEY);

//creating card

function createNewsCard(dataForElement) {
  const newsCard = new NewsCard(dataForElement);
  return newsCard.create();
}

//render cards after request

function searchNews() {
  event.preventDefault();
  renderLoading(true);
  visuable(newsSection);
  newsApi
    .getNews()

    .then((res) => {
      newsCardList.render(res.articles);
      console.log(res);
    })
    .catch((err) => {
      console.log(`ошибка:${err}. Запрос не выполнен`);
    })
    .finally(renderLoading(false));
}

// event listeners

searchForm.addEventListener("submit", (event) => {
  searchNews();
  searchForm.reset();
});
