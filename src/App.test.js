import React from 'react';
import {mount} from 'enzyme';
import App from './App';
import { TopNav } from './landingPage/topNav';

it.skip('renders without crashing', () => {
  const wrapper = mount(<App />);
  // Test if App renders Top Navigation Bar
  expect(wrapper.find(<TopNav />).exists()).to.equal(true);
  // Test if App renders Side Navigation Bar
  // Test if App renders Routers
});