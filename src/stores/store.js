import { createStore } from 'redux';
import { counter } from 'reducers';

export const store = createStore(counter);
