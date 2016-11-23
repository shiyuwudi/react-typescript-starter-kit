import React from 'react';
import {expect} from 'chai';
import {shallow,mount} from 'enzyme';
import Layout from '../../src/layouts/CoreLayout/CoreLayout';

describe('(layout) Core', () => {
  const wrapper = mount(<Layout />);

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('循环测试左侧导航划过变变亮', () => {
    let wrapper = mount(<Layout />);
    wrapper.find('.ant-menu-item').forEach(function (node) {
      node.simulate('mouseenter');
      expect(node.hasClass('ant-menu-item-active')).to.equal(true);
    });
  });

  it('循环测试左侧导航点击变蓝', () => {
    let wrapper = mount(<Layout />);
    wrapper.find('.ant-menu-item').forEach(function (node) {
      node.simulate('click');
      expect(node.hasClass('ant-menu-item-selected')).to.equal(true);
    });
  });

  it('循环测试左侧导航点击与hover', () => {
    let wrapper = mount(<Layout />);
    wrapper.find('.ant-menu-item').forEach(function (node) {

        node.simulate('click');
        expect(node.hasClass('ant-menu-item-selected')).to.equal(true);

        node.simulate('mouseenter');
        expect(node.hasClass('ant-menu-item-active')).to.equal(true);

    });
  });

  it('菜单默认关闭', () => {
    expect(wrapper.find('.ant-layout-aside-collapse')).to.have.length(1);
  });

  it('5个导航菜单', () => {
    expect(wrapper.find('.nav-text')).to.have.length(5);
  });

  it('菜单打开1', () => {
    wrapper.find('.ant-aside-action').simulate('click');
    expect(wrapper.find('.ant-layout-aside-collapse')).to.have.length(0);
  });
  it('菜单打开2', () => {
    wrapper.find('.ant-aside-action').simulate('click');
    expect(wrapper.find('.ant-layout-aside')).to.have.length(1);
  });



});
