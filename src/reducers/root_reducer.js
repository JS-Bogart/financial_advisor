import { combineReducers } from 'redux';
import riskReducer from './risk_reducer';
// import { tableData } from '../store/tableData';

export default combineReducers({
  // tableData: tableData,
  risk: riskReducer
});