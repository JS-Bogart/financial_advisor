import { combineReducers } from 'redux';
import { tableData } from '../store/tableData';

export default combineReducers({
  tableData: tableData
});