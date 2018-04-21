import { GET_WEATHER_CONDITIONS } from '../constants';

export const weatherConditions = (state = [], action) => {
  const { type, data } = action;

  switch(type) {
    case GET_WEATHER_CONDITIONS: {
      return data;
    }

    default: {
      return state;
    }
  }
};
