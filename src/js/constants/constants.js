export const ERROR_MESSAGES = {
  valueMissing: "Нужно ввести ключевое слово",
  tooShort: "Должно быть от 2 до 30 символов",
};
export const PAGE_SIZE = '100';
export const FIRST_ARG = 0;
export const SECOND_ARG = 3;
export const NODE_ENV = process.env.NODE_ENV === "production";
export const API_KEY = "5fc728e5d1e342cdb15adc005cc6e261";
export const API_URL =
  NODE_ENV === 'development' ? 'https://newsapi.org/v2/everything?': 'https://nomoreparties.co/news/v2/everything?';

export const DATE = new Date();
export const CURRENT_DATE = `${DATE.getFullYear()}-${
  DATE.getMonth() + 1
}-${DATE.getDate()}`;

export const WEEK_AGO = `${DATE.getFullYear()}-${DATE.getMonth() + 1}-${
  DATE.getDate() - 6
}`;
