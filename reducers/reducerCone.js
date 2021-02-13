import { CONE_RADIUS_INCREASE, CONE_LENGTH_INCREASE, CONE_HEIGHT_INCREASE } from "../action-types/actionTypeCone.js";
import { conRadius, coneLength, coneHeight } from "../actions/actionCone.js";

const initState = {
	r: 0,
	l: 0,
	h: 0,
	volume: 0,
	area: 0, 
	total: 0,
}

export const reducerCone = (state = initState, action) => {
	switch(action.type){
		case conRadius:
			return{
				...state,
				r: state.r + 1,
				volume: 1/3 * Math.PI * (state.r + 1) * (state.r + 1) * state.h,
				area: Math.PI * (state.r + 1) * state.l,
				total: Math.PI * (state.r + 1) *(state.l + (state.r + 1)),
			}
		case coneLength:
			return{
				...state,
				l: state.l + 1,
				volume: 1/3 * Math.PI * state.r * state.r * state.h,
				area: Math.PI * state.r * (state.l + 1),
				total: Math.PI * state.r * ((state.l + 1) + state.r),
			}
		case coneHeight:
			return{
				...state,
				h: state.h + 1,
				volume: 1/3 * Math.PI * state.r * state.r * (state.h + 1),
				area: Math.PI * state.r * state.l,
				total: Math.PI * state.r * (state.l + state.r),
			}
		default:
			return state
	}
}

