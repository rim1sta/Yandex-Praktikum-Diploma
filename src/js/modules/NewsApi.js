export default class NewsApi {
  constructor(baseUrl, pageSize, searchInput, weekAgo, currentDate, apiKey) {
    this.baseUrl = baseUrl;
    this.pageSize = pageSize;
    this.searchInput = searchInput;
    this.currentDate = currentDate;
    this.weekAgo = weekAgo;
    this.apiKey = apiKey;
    
  }
  getNews = () => {
    return fetch(
        `${this.baseUrl}` +
        `pageSize=${this.pageSize}&` +
        `q=${this.searchInput.value}&` +
        `from=${this.weekAgo}&` +
        `to=${this.currentDate}&` +
        `apiKey=${this.apiKey}`,
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
