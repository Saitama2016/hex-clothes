import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import SideNav from './sideNav';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<SideNav />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <SideNav />
                </Provider>)
    });
});