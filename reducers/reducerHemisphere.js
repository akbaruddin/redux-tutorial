import { HEIGHT_HEMI } from "../action-types/actionTypeHemisphare.js";
import { hemiIncrease } from "../actions/actionHemisphare.js";

const initState = {
    l: 0
}

export const reducerHemi = (state=initState, action) => {
    switch(action.type) {
        case HEIGHT_HEMI:
            return {
                l: state.l + 1
            }
        default: 
            return state;
    }
}