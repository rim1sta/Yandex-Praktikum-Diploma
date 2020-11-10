export default class NewsCardList {
  constructor(container, createCard) {
    this.container = container;
    this.createCard = createCard;
    
  }
  addCard(card) {
    this.container.append(card);
  }
  render(res, firstArg, secondArg) {
    res.slice(firstArg, secondArg).forEach((card) => {
      this.addCard(this.createCard(card));
    });
  }
updateList(card){
this.container.querySelectorAll('.news__card').forEach((card)=>{
    card.remove()
})
}

}
