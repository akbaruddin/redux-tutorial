import { HEMISPHERE } from "../action-types/actionTypeHemisphere.js";
import { hemiSphere } from "../actions/actionHemisphere.js";

const initState = {
	r: 0,
	volume: 0,
	area: 0,
	total: 0,
}

export const reducerHemisphere =(state = initState, action) => {
	switch(action.type){
		case HEMISPHERE:
			return{
				...state,
				r: state.r + 1,
				volume: 2/3 * Math.PI * (state.r + 1) * (state.r + 1) * (state.r + 1),
				area: 2 * Math.PI * (state.r + 1) * (state.r + 1),
				total: 3 * Math.PI * (state.r + 1) * (state.r + 1),
			}
		default:
			return state
	}
}