/**
 * Created by lixiaoyang on 2016/10/29.
 */
import * as React from "react";
import {connect} from 'react-redux';
import List from '../components/List';
import Detail from '../components/Detail';
import {fetchList, fetchDetail} from '../actions/action';

const mapDispatchToProps = {
  fetchList,
  fetchDetail
};

const mapStateToProps = (state: any) => ({
  list: state.listReducer,
  detail: state.detailReducer
});

class ListContainer extends React.Component<any, any> {
  render() {
    let {
      list,
      detail
    }=this.props;

    return <div>
      <List {...this.props}/>
      <Detail detail={detail}/>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
