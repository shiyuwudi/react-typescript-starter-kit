// no longer being used once Karma is set up
import {expect} from 'chai';
import sinon from 'sinon';
import {shallow} from 'enzyme';

global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
