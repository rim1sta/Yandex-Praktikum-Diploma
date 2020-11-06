export default class NewsApi {
  constructor(baseUrl, searchInput, date, apiKey) {
    this.baseUrl = baseUrl;
    this.searchInput = searchInput;
    this.date = date;

    this.apiKey = apiKey;
  }
  getNews = () => {
    return fetch(
      `${this.baseUrl}q=${this.searchInput.value}&from=${this.date}&apiKey=${this.apiKey}`,
      {
        method: "GET",
      }
    ).then((res) => {
      return this._getResponseData(res);
    });
  };
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }
}
