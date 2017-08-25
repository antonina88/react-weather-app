import { GET_WEATHER_CONDITIONS } from '../constants';

export const weatherConditions = (state = [], action) => {
	const { type } = action;

	switch(type) {
		case GET_WEATHER_CONDITIONS: {
			return action.data;
		}
		default: {
			return state;
		}
	}
};
