import { combineReducers } from "redux";
import { gamereducer, darkreducer } from "./reducer";

const rootred = combineReducers({
    gamereducer, darkreducer
});

export default rootred