import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import TopNav from './topNav';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <TopNav />
                </Provider>);
    });
});