import { HEMISPHERE } from "../action-types/actionTypeHemisphere.js";

const initState = {
    l: 0
}

export const reducerHemi = (state=initState, action) => {
    switch(action.type) {
        case HEMISPHERE:
            return {
                l: state.l + 1
            }
        default: 
            return state;
    }
}