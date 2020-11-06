export default class NewsCard {
  constructor(item) {
    this.item = item;
    this.card = null;
  }
  getTemplate() {
    const templateString = `<div class="news__card">
        <a href="" class="news__link" target="blanc">
            <img src="" alt="картинка новостей"
                class="news__img">
            <div class="news__container">
                <p class="news__date"></p>
                <h3 class="news__title-card"></h3>
                <p class="news__paragraph"></p>
                <p class="news__source"></p>
            </div>
        </a>
    </div>`;
    const element = document.createElement("div");
    element.insertAdjacentHTML("beforeend", templateString.trim());
    return element.firstChild;
  }
  create() {
    this.card = this.getTemplate();
    this.card.querySelector(".news__link").setAttribute("href", this.item.url);
    this.card
      .querySelector(".news__img")
      .setAttribute("src", this.item.urlToImage);
    this.card.querySelector(".news__date").textContent = this.item.publishedAt;
    this.card.querySelector(".news__title-card").textContent = this.item.title;
    this.card.querySelector(
      ".news__paragraph"
    ).textContent = this.item.description;
    this.card.querySelector(
      ".news__source"
    ).textContent = this.item.source.name;
    return this.card;
  }
}
