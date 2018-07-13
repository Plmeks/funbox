import { combineReducers } from "redux";
import markers from "./markers";
import yandexMap from "./yandexMap";

// exporting all reducers
export default combineReducers({
    markers,
    yandexMap
});