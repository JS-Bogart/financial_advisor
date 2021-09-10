import { combineReducers } from 'redux';
import riskReducer from './risk_reducer';
import tableReducer from './table_reducer';

export default combineReducers({
  tableData: tableReducer,
  risk: riskReducer
});