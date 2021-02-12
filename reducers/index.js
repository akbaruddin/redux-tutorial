import { combineReducers, createStore } from "redux";
import { reducerHemi } from "./reducerHemisphare.js";

const rootReducer = combineReducers({
    hemi: reducerHemi,


})

export const store = createStore(rootReducer);