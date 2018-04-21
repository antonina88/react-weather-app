import { SET_FILTER, SET_PARAM_DIAGRAM } from '../../constants';

export const setParamDiagram = value => {
  return {
    type: SET_PARAM_DIAGRAM,
    value
  };
};

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  };
};
