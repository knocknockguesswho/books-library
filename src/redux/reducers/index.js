import { combineReducers } from 'redux';
import Auth from './Auth';
import Books from './GetBooks'
import Filter from './Filter'

export default combineReducers({ 
    Auth,
    Books,
    Filter
 });