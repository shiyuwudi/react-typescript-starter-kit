import * as React from "react";
import {Button, Table} from 'antd';
import './style.less'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: (text: String) => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data: any[] = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
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

  render() {
    return (<div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary">
          删除
        </Button>
      </div>

      <Table rowSelection={rowSelection}
             columns={columns}
             dataSource={data}/>
    </div>)
  }
}


export default List
