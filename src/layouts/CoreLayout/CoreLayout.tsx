import * as React from 'react';
import {Menu, Icon, Tabs} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
import './style.less';

interface CoreLayoutProps {
  children?: any;
}
interface CoreLayoutState {
  current?: any;
}
export let height = 0;

export default class CoreLayout extends React.Component<CoreLayoutProps, CoreLayoutState> {

  constructor(props: any, context: any) {
    super(props, context);
    height = document.body.clientHeight - 240;
    this.state = {
      current: 'brandList'
    };
  }

  handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  };

  componentDidMount = () => {
    window.onresize = () => {
      height = document.body.clientHeight - 240;
    };
  };

  render() {
    return (
      <div className={'ant-layout-aside'}>
        <Menu onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
        >
          <SubMenu title={'基础资料'}>
            <MenuItemGroup title='Item 1'>
              <Menu.Item key='setting:1'>Option 1</Menu.Item>
              <Menu.Item key='setting:2'>Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title='Item 2'>
              <Menu.Item key='setting:3'>Option 3</Menu.Item>
              <Menu.Item key='setting:4'>Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu title={'商品管理'}>
            <Menu.Item key='brandList'>商品品牌</Menu.Item>
            <Menu.Item key='goodsCatList'>商品分类</Menu.Item>
          </SubMenu>

          <Menu.Item key='mail'>
            <Icon type='mail'/>Navigation One
          </Menu.Item>
          <Menu.Item key='app' disabled>
            <Icon type='appstore'/>Navigation Two
          </Menu.Item>
          <SubMenu title={<span><Icon type='setting' />Navigation Three - Submenu</span>}>
            <MenuItemGroup title='Item 1'>
              <Menu.Item key='setting:1'>Option 1</Menu.Item>
              <Menu.Item key='setting:2'>Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title='Item 2'>
              <Menu.Item key='setting:3'>Option 3</Menu.Item>
              <Menu.Item key='setting:4'>Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key='alipay'>
            <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>Navigation Four - Link</a>
          </Menu.Item>
        </Menu>
        <div className='ant-layout-main'>
          <div className='ant-layout-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}