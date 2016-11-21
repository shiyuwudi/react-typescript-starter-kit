import * as React from "react";
import {Table} from 'antd';

export interface NormalTableProps {
  rowSelection: any,
  scroll: any,
  loading: any,
  columns: any,
  dataSource: any,
}

export default class NormalTable extends React.Component<NormalTableProps, any> {

  constructor(props: NormalTableProps) {
    super(props);
  }

  render() {
    return (
      <Table
        {...this.props}/>
    )
  }
}