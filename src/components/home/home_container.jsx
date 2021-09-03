import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => {
  return {
    tableData: Object.values(state.tableData)
  };
};

export default connect(mapStateToProps, null)(Home);