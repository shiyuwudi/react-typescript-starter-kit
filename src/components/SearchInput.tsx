import * as React from 'react';
import {Button, Icon, Input} from 'antd';
import * as classNames from 'classnames';

const InputGroup = Input.Group;

export interface SearchInputProps {
  placeholder: string;
  onSearch: (keyword: any) => void;
  style: any;
}

// 搜索输入框
export default class SearchInput extends React.Component<SearchInputProps, any> {

  constructor(props: SearchInputProps) {
    super(props);
    this.state = {
      value: '',
      focus: false,
      edited: false
    };
  }

  handleInputChange = (e: any) => {
    this.setState({
      edited: false,
      value: e.target.value,
    });
  };

  handleFocus = (e: any) => {
    this.setState({
      focus: e.target === document.activeElement,
    });
  };

  handleFocusBlur = (e: any) => {
    this.setState({
      focus: e.target === document.activeElement,
    });
  };

  handleSearch = () => {
    if (this.state.value && this.props.onSearch) {
      this.props.onSearch(this.state.value);
      this.setState({
        edited: true
      });
    }
  };

  cancelSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch('');
      this.setState({
        value: '',
        edited: false
      });
    }
  };

  render() {
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim(),
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus,
    });

    return (
      <InputGroup
        className={searchCls}
        style={this.props.style}
      >
        <Input
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleInputChange}
          onBlur={this.handleFocusBlur}
          onPressEnter={this.handleSearch}
        />
        <div className='ant-input-group-wrap'>
          {
            this.state.edited ?
              <Button
                className={btnCls}
                onClick={this.cancelSearch}
              >
                <Icon type='cross'/>
              </Button>
              :
              <Button
                className={btnCls}
                onClick={this.handleSearch}
              >
                <Icon type='search'/>
              </Button>
          }
        </div>
      </InputGroup>
    );
  }
}
