/**
 * Created by lixiaoyang on 2016/10/29.
 */
import List from '../components/List';
import {connect} from 'react-redux';
import {fetchList} from '../actions/action';

const mapDispatchToProps = {
  fetchList,
};

const mapStateToProps = (state: any) => ({
  list: state.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
