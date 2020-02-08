import { ActionEnums } from 'enums';

const initialState = {
  count: 0
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case ActionEnums.INCREASE_COUNT_TYPE:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionEnums.DECREASE_COUNT_TYPE:
      return {
        ...state,
        count: (state.count > 0 && state.count - 1) || 0
      };
    default:
      return state;
  }
};
