import * as React from "react";
import {Modal, Button} from 'antd';

class List extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  render() {

    let {detail, hide}=this.props;

    return (<Modal title="详情" visible={detail.visible}
                   onOk={hide} onCancel={hide}
    >
      <p>{detail && detail.data && detail.data.title}</p>
    </Modal>);
  }
}

export default List
