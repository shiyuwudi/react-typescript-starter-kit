import * as React from "react";
import {Button, Table} from 'antd';
import './style.less'
import {height} from '../../../layouts/CoreLayout/CoreLayout'

const rowSelection = {
  onChange(selectedRowKeys: any, selectedRows: any) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

export interface ListProps {
  fetchList: any,
  fetchDetail: any,
  list: any[]
}

class List extends React.Component<ListProps, any> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount = ()=> {
    this.props.fetchList();
  };

  showDetail = (id: number)=> {
    this.props.fetchDetail(id);
  };

  render() {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
      width: '20%'
    }, {
      title: '标题',
      dataIndex: 'title',
      width: '60%'
    }, {
      title: '操作',
      dataIndex: 'type',
      width: '20%',
      render: (text: String, record: any, index: number) => <a href="javascript:void(0)"
                                                               onClick={()=>this.showDetail(record.id)}>详情</a>,
    }];

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
