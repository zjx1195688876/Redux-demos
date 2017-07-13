import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
import { combineReducers } from 'redux';

const todoAPP = combineReducers({
    todos,
    visibilityFilter
});

export default todoAPP;