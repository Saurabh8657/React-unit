//use this variable to create the redux store.
//the initial data of the redux store should be {counter: 10}
import { createStore } from 'redux';
import {reducer} from './reducer';

const store = createStore(reducer);

export { store };
