import * as React from 'react';
import {Modal} from 'antd';

export interface EditProps {
  editState: any;
  hide: any;
}

class List extends React.Component<EditProps, any> {

  constructor(props: EditProps) {
    super(props);
  }

  render() {

    let {
      editState,
      hide
    } = this.props;

    return (<Modal title='详情'
                   visible={editState.visible}
                   onOk={hide}
                   onCancel={hide}
    >
      asd
    </Modal>);
  }
}

export default List;
