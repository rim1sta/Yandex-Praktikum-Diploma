export default class CommitCard {
    constructor(item){
        this.item = item;
        this.card = null;
    }
    getTemplate() {
const templateString = `<div class="slider__card">
<p class="slider__date"></p>
<div class="slider__card-user">
    <img class="slider__user-avatar" alt="аватар пользователя"
        src="">
    <div class="slider__user-info">
        <p class="slider__user-name"></p>
        <p class="slider__user-mail"></p>
    </div>
</div>
<p class="slider__commit"></p>
</div>`
const element = document.createElement("div");
    element.insertAdjacentHTML("beforeend", templateString.trim());
    return element.firstChild;
    }
    create() {
        this.card = this.getTemplate();
        this.card.querySelector('.slider__date').textContent = this.item.commit.committer.date
        this.card.querySelector('.slider__user-name').textContent = this.item.commit.author.name
        this.card.querySelector('.slider__user-mail').textContent = this.item.commit.committer.email
        this.card.querySelector('.slider__commit').textContent = this.item.commit.message
        this.avatar = this.card.querySelector('.slider__user-avatar');
        this.avatar.setAttribute("src", this.item.author.avatar_url);
        this.card.classList.add('swiper-slide')
        return this.card;
    }
}