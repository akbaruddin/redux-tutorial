import { combineReducers, createStore } from "redux";

import { reducerCone } from "./reducerCone.js";
import { reducerCube } from "./reducerCube.js";
import { reducerCuboid } from "./reducerCuboid.js";
import { reducerCylinder } from "./reducerCylinder.js";
import { reducerSphere } from "./reducerSphere.js";
import { reducerHemi } from "./reducerHemisphere.js";

const rootReducer = combineReducers({
    reducerCone,
    reducerCube,
    reducerCuboid,
    reducerCylinder,
    reducerSphere,
    reducerHemi,
})

export const store = createStore(rootReducer);