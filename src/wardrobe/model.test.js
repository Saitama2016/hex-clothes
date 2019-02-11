import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Model from './model';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Model />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <Model />
                </Provider>)
    });
});