import * as React from 'react';
import {Button, Table, Popconfirm, Row, Col, Icon} from 'antd';
import './style.less';
import {height} from '../../../layouts/CoreLayout/CoreLayout'
import SearchInput from '../../../components/SearchInput'
import ColumnPicker from "../../../components/ColumnPicker";
import NormalTable from "../../../components/NormalTable";


export interface ListProps {
  listState: any,

  onRowSelectChange: any,
  selectedRowKeys: any[],
  selectedRows: any[],

  fetchList: any,
  fetchEdit: (id: any) => void,

  fetchDel: any,
  multiDel: any,
  loadEditData: any,
  onSearch: any,

}

class List extends React.Component<ListProps, any> {

  constructor(props: ListProps) {
    super(props);
  }

  componentDidMount = ()=> {
    this.props.fetchList();
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
      onChange: this.props.onRowSelectChange,
      selectedRowKeys: listState.selectedRowKeys,
    };

    return (<div>
      <Row style={{marginBottom: 16}}>
        <Col span={12}>
          <Popconfirm title="确定要删除这些品牌吗？"
                      placement="bottomLeft"
                      onConfirm={()=>this.props.loadEditData(-1)}>
            <Button type="primary"
                    disabled={listState.selectedRowKeys.length==0}
                    loading={listState.delLoading}>
              删除
            </Button>
          </Popconfirm>
          <Button type="ghost"
                  style={{marginLeft: 8}}
                  onClick={()=>this.props.fetchEdit(-1)}>
            新增
          </Button>

          <Button type="ghost" style={{marginLeft: 8}} onClick={this.props.fetchList}>
            <Icon type="reload"/>
          </Button>
        </Col>
        <Col span={12}
             style={{float: 'right'}}>
          <SearchInput
            placeholder="请输入品牌名称"
            onSearch={this.props.onSearch}
            style={{float: 'right', width: 200}}/>
          <ColumnPicker
            columns={columns}
            select_columns={[]}
            style={{float: 'right', marginLeft: 8}}
            handleColumnChange={this.props.loadEditData}/>
        </Col>
      </Row>

      <NormalTable
        fetchList={this.props.fetchList}
        rowSelection={rowSelection}
        scroll={{y:height}}
        loading={listState.listLoading}
        columns={columns}
        dataSource={listState.data}
        pagination={listState.pagination}/>
    </div>)
  }
}


export default List
