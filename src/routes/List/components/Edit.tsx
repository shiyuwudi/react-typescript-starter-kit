import * as React from 'react';
import {Form, Icon, Input, Button, Checkbox, Modal} from 'antd';
const FormItem = Form.Item;

export interface EditProps {
  editState: any;
  hide: any;
  form: any;
  onFormSubmit: any
}

class Edit extends React.Component<EditProps, any> {

  constructor(props: EditProps) {
    super(props);
  }

  render() {

    let {
      editState,
      hide,
      onFormSubmit
    } = this.props;

    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 8},
      wrapperCol: {span: 12},
    };

    return (
      <Modal title='详情'
             visible={editState.visible}
             onOk={onFormSubmit}
             onCancel={hide}>
        <Form horizontal>
          <FormItem
            {...formItemLayout}
            label='品牌名称：'>
            {getFieldDecorator('goodsBrandName', {
              rules: [{required: true, message: '请填写品牌名称'}],
            })(
              <Input placeholder='品牌名称'/>
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onFormChange(changedFields);
  },
  mapPropsToFields(props) {
    return props.editState.edit;
  },
})(Edit);
