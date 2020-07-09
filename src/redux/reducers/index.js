import { combineReducers } from 'redux';
import Auth from './Auth';
import Books from './GetBooks';
import Filter from './Filter';
import Interface from './Interface'

export default combineReducers({ 
    Auth,
    Books,
    Filter,
    Interface
 });