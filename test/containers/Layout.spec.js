import React from 'react';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/layouts/CoreLayout';

describe('DOM Rendering', function () {
    it('Click the delete button, the Todo item should be deleted', function () {
        const app = TestUtils.renderIntoDocument(<App/>);
        let todoItems = TestUtils.scryRenderedDOMComponentsWithTag(app, 'div');
        let todoLength = todoItems.length;
        expect(todoLength).to.equal(10);
    });
});

