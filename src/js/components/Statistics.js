export default class Statistics {
    constructor(storageData){
        this.storageData = storageData;
    }
    setTitle(title){
        title.textContent = `Вы спросили: «${this.storageData.getValue()}»`;
    }
    setTotalResults(results) {
        results.textContent = `${this.storageData.getData().length}`;
      }
      setTotalRequest(titleRequest) {
        let count = 0;
        this.storageData.getData().forEach((item) => {
          let str = item.title
            .toUpperCase()
            .indexOf(`${this.storageData.getValue()}`.toUpperCase());
          if (str !== -1) {
            count++;
          }
        });
        titleRequest.textContent = `${count}`;
      }
      setStatisticsDay(nodesArray) {
        nodesArray.forEach((item, index) => {
          const date = new Date();
          date.setDate(date.getDate() - index);
          let totalRequest = this._getRequestDays(date.toISOString().substr(0, 10));
          item.textContent = `${totalRequest}`;
          item.style.width = `${totalRequest}%`;
        });
      }
    
      _getRequestDays(currentDate) {
        let count = 0;
        this.storageData.getData().forEach((item) => {
          const dateNews = item.publishedAt.substr(0, 10);
          if (dateNews === currentDate) {
            count++;
          }
        });
        return count;
      }
    }


