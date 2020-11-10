export default class DataStorage {
  saveData(res) {
    localStorage.setItem("data", JSON.stringify(res));
  }
  getData() {
    return JSON.parse(localStorage.getItem("data"));
  }
  updateData() {
    localStorage.removeItem("data");
  }
  setRequest(request){
    localStorage.setItem("request", `${request}`);
  };
  getRequest(){
    return localStorage.getItem("request");
  };
}
