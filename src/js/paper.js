import "../pages/paper.css";
import Statistics from "../js/components/Statistics.js";
import DataStorage from "../js/modules/DataStorage";
import {setWeekDays, setMonth} from "./utils/functions.js"


const dataStorage = new DataStorage();
const statistics = new Statistics(dataStorage);

setWeekDays(document.querySelectorAll(".diagram__week-span"));
setMonth(document.querySelector(".diagram__title-container-data_month"));

statistics.setTitle(document.querySelector(".request__title"), );
statistics.setTotalResults(document.querySelector(".request__span-week"));
statistics.setTotalRequest(document.querySelector(".request__span-titles"));
statistics.setStatisticsDay(document.querySelectorAll(".diagram__blue-line"));