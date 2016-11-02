import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import {shallow} from 'enzyme';
import Layout from '../../src/layouts/CoreLayout/CoreLayout';

describe('(layout) Core', function () {
    const wrapper = shallow(<Layout />);

    it('renders as a <div>', () => {
        expect(wrapper.type()).to.eql('div');
    });

    it('菜单默认关闭', () => {
        expect(wrapper.find('.ant-layout-aside')).to.have.length(1);
    });

    it('5个导航菜单', function () {
        expect(wrapper.find('.nav-text')).to.have.length(5);
    });
});
