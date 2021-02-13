import { combineReducers, createStore } from "redux";

import { reducerCone } from "./reducerCone.js";
import { reducerCube } from "./reducerCube.js";
import { reducerCuboid } from "./reducerCuboid.js";
import { reducerCylinder } from "./reducerCylinder.js";
import { reducerSphere } from "./reducerSphere.js";
import { reducerHemisphere } from "./reducerHemisphere";

const rootReducer = combineReducers({
    hemi: reducerHemisphere,
    reducerCone,
    reducerCube,
    reducerCuboid,
    reducerCylinder,
    reducerSphere,
    reducerHemisphere,
})

export const store = createStore(rootReducer);