import * as React from "react";
import {Button, Table} from 'antd';
import './style.less'
import {height} from '../../../layouts/CoreLayout/CoreLayout'

const columns = [{
  title: 'id',
  dataIndex: 'id',
}, {
  title: 'title',
  dataIndex: 'title',
}, {
  title: 'type',
  dataIndex: 'type',
  render: (type: String) => <a href="#">{type}</a>,
}];


const rowSelection = {
  onChange(selectedRowKeys: any, selectedRows: any) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

class List extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount = ()=> {
    this.props.fetchList();
  };

  render() {
    let {list}=this.props;
    return (<div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary"
                onClick={this.props.fetchList}>
          删除
        </Button>
      </div>

      <Table rowSelection={rowSelection}
             scroll={{y:height}}
             columns={columns}
             dataSource={list}/>
    </div>)
  }
}


export default List
