import { CUBOID_LENGTH, CUBOID_BASE, CUBOID_HEIGHT } from "../action-types/actionTypeCuboid.js";
import { cuboidLength, cuboidBase, cuboidHeight } from "../actions/actionCuboid.js";

const initState = {
	l: 0,
	b: 0,
	h: 0,
	volume: 0,
	area: 0,
	total: 0,
}

export const reducerCuboid = (state =initState, action) =>{
	switch(action.type){
		case CUBOID_LENGTH:
			return {
				...state,
				l: state.l + 1,
				volume: (state.l + 1)* state.b * state.h,
				area: 2 * state.h *((state.l + 1) + state.b),
				total: 2 * ((state.l + 1) * state.b + state.b * state.h + state.h * (state.l + 1)),
			}
		case CUBOID_BASE:
			return{
				...state,
				b: state.b + 1,
				volume: state.l * (state.b + 1) * state.h,
				area: 2 * state.h *(state.l + (state.b + 1)),
				total: 2 * (state.l * (state.b + 1) + (state.b1+ 1) * state.h + state.h * state.l),
			}
		case CUBOID_HEIGHT:
			return{
				...state,
				h: state.h + 1,
				volume: state.l * state.b * (state.h + 1),
				area: 2 * (state.h + 1)
			}
		default:
			return state
	}
}


