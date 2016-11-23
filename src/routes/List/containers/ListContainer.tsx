/**
 * Created by lixiaoyang on 2016/10/29.
 */
import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import List from '../components/List';
import Detail from '../components/Edit';
import {fetchList, fetchEdit, hide, onRowSelectChange} from '../actions/action';

class ListContainer extends React.Component<any, any> {
  render() {
    return (
      <div>
        <List {...this.props}/>
        <Detail {...this.props}/>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchList,
  fetchEdit,
  hide,
  onRowSelectChange
};

const mapStateToProps = (state: any) => ({
  listState: state.listReducer,
  editState: state.editReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
