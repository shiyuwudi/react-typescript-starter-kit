import * as React from "react";
import {Button, Table, Popconfirm, Row, Col, Icon} from 'antd';
import './style.less'
import {height} from '../../../layouts/CoreLayout/CoreLayout'


export interface ListProps {
  fetchList: any,
  fetchDetail: any,
  fetchEdit: any,
  fetchDel: any,
  listState: any,
  multiDel: any,
  loadEditData: any
}

class List extends React.Component<ListProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      selected: false
    };
  }

  componentDidMount = ()=> {
    this.props.fetchList();
  };

  showDetail = (id: number)=> {
    this.props.fetchDetail(id);
  };

  render() {
    const columns = [{
      title: '品牌序号',
      dataIndex: 'sequence',
      key: 'sequence',
      width: '20%',
      render: ((text: String, record: any, index: number) => <div>{index + 1}</div>).bind(this)
    }, {
      title: '品牌名称',
      dataIndex: 'goodsBrandName',
      key: 'goodsBrandName',
      width: '40%',
    }, {
      title: '商品数量',
      dataIndex: 'goodsCount',
      key: 'goodsCount',
      width: '20%',
      render: ((text: String, record: any, index: number) => <div>{text || '0'}</div>)
    }, {
      title: '操作',
      dataIndex: 'x',
      key: 'x',
      width: '20%',
      render: ((text: String, record: any, index: number) =><div>
        <a
          href="javascript:void(0)"
          onClick={()=>this.props.fetchEdit(record.id)}
        >
          修改
        </a>
        <Popconfirm
          title="确定要删除这个品牌吗？"
          onConfirm={()=>this.props.fetchDel([record.id])}
        >
          <a
            href="javascript:void(0)"
            style={{marginLeft: 8, marginRight: 8}}>
            删除
          </a>
        </Popconfirm>
      </div>).bind(this),
    }];

    let {listState}=this.props;

    const rowSelection = {
      onChange: ((selectedRowKeys: any, selectedRows: any)=> {

        this.setState({
          selected: true
        });

        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      }),
    };

    return (<div>
      <Row style={{marginBottom: 16}}>
        <Col span={12}>
          <Popconfirm title="确定要删除这些品牌吗？"
                      placement="bottomLeft"
                      onConfirm={()=>this.props.loadEditData(-1)}>
            <Button type="primary"
                    disabled={!this.state.selected}
                    loading={listState.listLoading}>
              删除
            </Button>
          </Popconfirm>
          <Button type="ghost"
                  style={{marginLeft: 8}}
                  onClick={()=>this.props.loadEditData(-1)}>
            新增
          </Button>

          <Button type="ghost" style={{marginLeft: 8}} onClick={this.props.fetchList}>
            <Icon type="reload"/>
          </Button>
        </Col>
        <Col span={12}
             style={{float: 'right'}}>
        </Col>
      </Row>

      <Table rowSelection={rowSelection}
             scroll={{y:height}}
             loading={listState.listLoading}
             columns={columns}
             dataSource={listState.data}/>
    </div>)
  }
}


export default List
