import "../pages/about.css";
import CommitCard from "../js/components/CommitCard.js";
import CommitCardList from "../js/components/CommitCardList.js";
import GithubApi from "../js/modules/GithubApi.js";
import Swiper, { Navigation, Pagination } from "swiper";

// configure Swiper
Swiper.use([Navigation, Pagination]);

// init Swiper:
const mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  direction: "horizontal",
  grabCursor: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    
  },
  

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}).swiper;

const sliderContainer = document.querySelector(".slider__container");
const NODE_ENV = process.env.NODE_ENV === "production";
const API_URL =
  NODE_ENV === "production"
    ? "https://api.github.com"
    : "http://api.github.com";
const options = `${API_URL}/repos/rim1sta/news-analyzer/commits`;

function createCommitCard(dataForElement) {
  const commitCard = new CommitCard(dataForElement);
  return commitCard.create();
}

const commitCardList = new CommitCardList(sliderContainer, createCommitCard);
const githubApi = new GithubApi(options);

//api request
githubApi
  .getCommits()
  .then((res) => {
    commitCardList.render(res);
    console.log(res);
  })
  .catch((err) => {
    console.log(`ошибка:${err}. Запрос не выполнен`);
  });
