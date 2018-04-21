import { GET_LOCALITY } from '../constants';

export const locality = (state = null, action) => {
  const { type } = action;

  switch(type) {
    case GET_LOCALITY: {
      return getLocality(state, action);
    }
    default: {
      return state;
    }
  }
};

function getLocality(state, action) {
  return {
    city: action.city,
    country: action.country
  };
}
