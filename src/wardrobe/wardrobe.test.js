import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Wardrobe from './wardrobe';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Wardrobe />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <Wardrobe />
                </Provider>);
    });
})