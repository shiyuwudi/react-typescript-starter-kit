import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import { shallow, render, mount } from 'enzyme';
import Layout from '../../src/layouts/CoreLayout/CoreLayout';

describe('(layout) Core', () => {
  const wrapper = shallow(<Layout />);

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('菜单默认关闭', () => {
    expect(wrapper.find('.ant-layout-aside.ant-layout-aside-collapse')).to.have.length(1);
  });

  it('5个导航菜单', () => {
    expect(wrapper.find('.nav-text')).to.have.length(5);
  });

  it('菜单打开1', () => {
    wrapper.find('.ant-aside-action').simulate('click');
    expect(wrapper.find('.ant-layout-aside.ant-layout-aside-collapse')).to.have.length(0);
  });
  it('菜单打开2', () => {
    wrapper.find('.ant-aside-action').simulate('click');
    expect(wrapper.find('.ant-layout-aside')).to.have.length(1);
  });
});
