import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import {About} from './about';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<About />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <About />
                </Provider>)
    });
});