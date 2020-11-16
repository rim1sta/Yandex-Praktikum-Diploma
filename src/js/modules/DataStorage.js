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
  setValue(value){
    localStorage.setItem("value", `${value}`);
  };
  getValue(){
    return localStorage.getItem("value");
  };
}
