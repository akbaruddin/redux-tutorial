import { CONE_RADIUS_INCREASE, CONE_LENGTH_INCREASE, CONE_HEIGHT_INCREASE } from "../action-types/actionTypeCone.js";

export const conRadius = () => {
    return { type: CONE_RADIUS_INCREASE }
}

export const coneLength = () => {
	return { type: CONE_LENGTH_INCREASE }
}

export const coneHeight = () => {
	return { type: CONE_HEIGHT_INCREASE }
}