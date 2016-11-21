/**
 * Created by lixiaoyang on 2016/10/29.
 */
import * as React from "react";
import {connect} from 'react-redux';
import List from '../components/List';
import Detail from '../components/Edit';
import {fetchList, fetchEdit, hide} from '../actions/action';

const mapDispatchToProps = {
  fetchList,
  fetchEdit,
  hide
};

const mapStateToProps = (state: any) => ({
  listState: state.listReducer,
  detail: state.detailReducer
});

class ListContainer extends React.Component<any, any> {
  render() {
    let {
      list,
      detail,
      hide
    }=this.props;

    return <div>
      <List {...this.props}/>
      <Detail detail={detail}
              hide={hide}
      />
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
