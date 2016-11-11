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
                   width={1000}
    >
      <div dangerouslySetInnerHTML={{__html:detail && detail.data && detail.data.title}}></div>
      <div dangerouslySetInnerHTML={{__html:detail && detail.data && detail.data.body}}></div>
    </Modal>);
  }
}

export default List
