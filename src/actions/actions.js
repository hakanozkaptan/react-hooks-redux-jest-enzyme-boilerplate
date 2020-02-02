import { ActionEnums } from 'enums';

export const increaseCount = () => ({
  type: ActionEnums.INCREASE_COUNT_TYPE
});

export const decreaseCount = () => ({
  type: ActionEnums.DECREASE_COUNT_TYPE
});
