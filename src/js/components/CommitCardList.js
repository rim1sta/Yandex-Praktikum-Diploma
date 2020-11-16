export default class CommitCardList {
    constructor(container, createCard){
        this.container = container;
        this.createCard = createCard;
    }
    addCard(card){
        this.container.append(card);
    }
    render(res){
res.forEach((card)=> {
    this.addCard(this.createCard(card))
})
    }
};