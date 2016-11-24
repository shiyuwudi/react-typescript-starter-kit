import * as React from 'react';
import {Button, Table, Popconfirm, Row, Col, Icon} from 'antd';
import {height} from '../../../layouts/CoreLayout/CoreLayout';
import SearchInput from '../../../components/SearchInput';
import ColumnPicker from '../../../components/ColumnPicker';
import NormalTable from '../../../components/NormalTable';

export interface ListProps {
  listState: any;
  onRowSelectChange: any;
  selectedRowKeys: any[];
  selectedRows: any[];
  fetchList: any;
  fetchEdit: (id: any) => void;
  fetchDelete: any;
  multiDel: any;
  loadEditData: any;
  onSearch: any;
}

class List extends React.Component<ListProps, any> {

  constructor(props: ListProps) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.fetchList();
  };

  handleColumnChange = (select_columns: any) => {
    this.setState({
      select_columns: select_columns
    });
  };

  customColumns = (table_head: any) => {
    if (this.state.select_columns) {
      let temp = []; // 存储实用的表头的临时变量
      for (let index in this.state.select_columns) {
        if (this.state.select_columns[index].show) {
          for (let j in table_head) {
            if (table_head[j].title === this.state.select_columns[index].title)
              temp.push(table_head[j]);
          }
        }
      }
      table_head = temp;
    }
    return table_head;
  };

  render() {
    let columns = [{
      title: '品牌序号',
      dataIndex: 'sequence',
      key: 'sequence',
      width: '20%',
      render: ((text: String, record: any, index: number) => <div>{index + 1}</div>)
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
      render: ((text: String, record: any, index: number) => <div>
        <a
          href='javascript:void(0)'
          onClick={() => this.props.fetchEdit(record.id)}
        >
          修改
        </a>
        <Popconfirm
          title='确定要删除这个品牌吗？'
          onConfirm={() => this.props.fetchDelete([record.id])}
        >
          <a
            href='javascript:void(0)'
            style={{marginLeft: 8, marginRight: 8}}>
            删除
          </a>
        </Popconfirm>
      </div>).bind(this),
    }];
    columns = this.customColumns(columns);
    let {listState} = this.props;

    const rowSelection = {
      onChange: this.props.onRowSelectChange,
      selectedRowKeys: listState.selectedRowKeys,
    };

    return (<div>
      <Row style={{marginBottom: 16}}>
        <Col span={12}>
          <Popconfirm title='确定要删除这些品牌吗？'
                      placement='bottomLeft'
                      onConfirm={()=>this.props.fetchDelete(listState.selectedRowKeys)}>
            <Button type='primary'
                    disabled={listState.selectedRowKeys.length === 0}
                    loading={listState.delLoading}>
              删除
            </Button>
          </Popconfirm>
          <Button type='ghost'
                  style={{marginLeft: 8}}
                  onClick={() => this.props.fetchEdit(-1)}>
            新增
          </Button>

          <Button type='ghost' style={{marginLeft: 8}} onClick={this.props.fetchList}>
            <Icon type='reload'/>
          </Button>
        </Col>
        <Col span={12}
             style={{float: 'right'}}>
          <SearchInput
            placeholder='请输入品牌名称'
            onSearch={(keyword) => this.props.onSearch({goodsBrandName:keyword})}
            style={{float: 'right', width: 200}}/>
          <ColumnPicker
            columns={columns}
            select_columns={columns}
            style={{float: 'right', marginLeft: 8}}
            handleColumnChange={this.handleColumnChange}/>
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
