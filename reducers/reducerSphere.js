import { SPHERE } from "../action-types/actionTypeSphere.js";
import { sphere } from "../actions/actionSphere.js";

const initState = {
	r: 0,
	volume: 0,
	area: 0,
	total: 0,
}

export const reducerSphere = (state = initState, action) => {
	switch(action.type){
		case SPHERE:
			return{
				...state,
				r: state.r + 1,
				volume: 4/3 * Math.PI * (state.r + 1) * (state.r + 1) * (state.r + 1),
				area: 4 * Math.PI * (state.r + 1) * (state.r + 1),
				total: 4 * Math.PI * (state.r + 1) * (state.r + 1),
			}
		default:
			return state
	}
}

