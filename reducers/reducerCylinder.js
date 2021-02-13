import { CYLINDER_RADIUS_INCREASE, CYLINDER_HEIGHT_INCREASE } from "../action-types/actionTypeCylinder.js";
import { cylinderRadius, cylinderHeight } from "../actions/actionCylinder.js";

const initState ={
	r: 0,
	h: 0,
	volume: 0,
	area: 0,
	total: 0,
}

export const reducerCylinder =(state = initState, action) =>{
	switch(action.type){
		case CYLINDER_RADIUS_INCREASE:
			return {
				...state,
				r: state.r + 1,
				volume: Math.PI * (state.r + 1) * (state.r + 1) * state.h,
				area: 2 * Math.PI * (state.r + 1) * state.h,
				total: 2 * Math.PI * (state.r + 1) *(state.h + state.r + 1), 
			}
		case CYLINDER_HEIGHT_INCREASE:
			return{
				...state,
				h: state.h + 1,
				volume: Math.PI * state.r * state.r * (state.h +1),
				area: 2 * Math.PI * state.r * (state.h + 1),
				total: 2 * Math.PI * state.r * ((state.h + 1 + state.r)),
			}			
		default :
			return state
	}
}
