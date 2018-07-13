import {createStore} from "redux";
import middleware from "./middleware";
import Reducers from "./reducers/";

export default createStore(Reducers, middleware);
