export default class NewsCardList {
  constructor(container, createCard) {
    this.container = container;
    this.createCard = createCard;
  }
  addCard(card) {
    this.container.append(card);
  }
  render(res) {
    res.forEach((card) => {
      this.addCard(this.createCard(card));
    });
  }
  visuable() {
    this.classList.togle("news__active");
  }
}
