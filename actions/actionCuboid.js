import { CUBOID_LENGTH, CUBOID_BASE, CUBOID_HEIGHT } from "../action-types/actionTypeCuboid.js";

export const cuboidLength = () => {
	return { type: CUBOID_LENGTH }
}

export const cuboidBase = () => {
	return { type: CUBOID_BASE }
}

export const cuboidHeight = () => {
	return { type: CUBOID_HEIGHT }
}