import * as React from 'react';
import {Table} from 'antd';

export interface NormalTableProps {
  rowSelection: any;
  scroll: any;
  loading: any;
  columns: any;
  dataSource: any;
  fetchList: any;
  pagination: any;
}

export default class NormalTable extends React.Component<NormalTableProps, any> {

  constructor(props: NormalTableProps) {
    super(props);
  }

  handleTableChange = (pagination: any, filters: any, sorter: any) => {
    // 点击页码
    if (this.props.rowSelection)
      this.props.rowSelection.onChange([], []);
    // 执行获取数据
    this.props.fetchList({
      pageSize: pagination.pageSize,
      currentPage: pagination.current,
      field: sorter.field,
      order: sorter.order,
    });
  };


  render() {
    let {pagination} = this.props;
    pagination.showSizeChanger = true; // 允许调整页打消
    pagination.showQuickJumper = true; // 允许快速跳页
    pagination.pageSizeOptions = ['20', '50', '100', '200'];
    pagination.showTotal = () => {
      return '总计' + pagination.total + '条';
    };

    return (
      <Table
        rowKey='id'
        onChange={this.handleTableChange}
        pagination={pagination}
        {...this.props}/>
    );
  }
}