
function renderLoading(isLoading, preloader) {
  
  if (isLoading) {
    preloader.classList.add("active");
    
  } else {
    preloader.classList.remove("active");
  }
};
function result(totalResult, element, error){
    if(totalResult){
        element.classList.remove("active")
        error.classList.add("active");
    } else {
      element.classList.add("active");
      error.classList.remove("active")
    }
};
 function renderThreeCards(start, step) {
    let numberStart = start;
    return function () {
      let returnValue = numberStart;
      numberStart += step;
      return returnValue;
    }    
  };
  function deleteButton(data){
    const blockCards = document.querySelector(".news");
    const nodeArray = Array.from(blockCards.querySelectorAll(".news__card"));
    if (nodeArray.length === data.length || data.length <= 3) {
      blockCards.querySelector(".news__button").classList.add("hidden");
    } else {
      blockCards.querySelector(".news__button").classList.remove("hidden");
    }
  }
   function dateMonth(month) {
    let currentMonth = "";
    if (month == 1) {
      currentMonth = "январь";
    } else if (month == 2) {
      currentMonth = "февраль";
    } else if (month == 3) {
      currentMonth = "март";
    } else if (month == 4) {
      currentMonth = "апрель";
    } else if (month == 5) {
      currentMonth = "май";
    } else if (month == 6) {
      currentMonth = "июнь";
    } else if (month == 7) {
      currentMonth = "июль";
    } else if (month == 8) {
      currentMonth = "август";
    } else if (month == 9) {
      currentMonth = "сентябрь";
    } else if (month == 10) {
      currentMonth = "октябрь";
    } else if (month == 11) {
      currentMonth = "ноябрь";
    } else if (month == 12) {
      currentMonth = "декабрь";
    }
    return currentMonth;
  };
   function dateForCard(date) {
    return `${new Date(date).getDate()} ${dateMonth(new Date(date).getMonth() + 1)}, ${new Date(date).getFullYear()}`;
  };
   function setDays (day) {
    let date = new Date();
    return date.getDate() - day;
  };
   function setMounth(mounth) {
    mounth.textContent = `Дата (${dateMonth(new Date().getMonth() + 1)})`;
  };
  
   function setWeekDays(container) {
    container.forEach((item, index) => {
      item.textContent = `${setDays(index)}`;
     });
  };
export {renderLoading, result, renderThreeCards, deleteButton, dateForCard, setWeekDays, setMounth};
