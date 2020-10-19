import React from 'react';
import Navbar from '../Navbar';
import { shallow } from 'enzyme';

describe('navbar should have buttons', () => {
    const wrapper = shallow(<Navbar />);
    xit('navbar buttons should have correct id', () => {
        expect(wrapper.find('#nav-bar')).to.have.lengthOf(1);
    });
    xit('social media buttons should have correct id', () => {
        expect(wrapper.find('#social-media-links')).to.have.lengthOf(1);
    });
})
describe('navbar component should properly render', () => {
    const wrapper = shallow(<Navbar />);
    xit('should render properly', () => {
        expect(wrapper.find(<Navbar />).length).toBe(1);
    });
})