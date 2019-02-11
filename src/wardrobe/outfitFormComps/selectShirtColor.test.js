import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import SelectShirtColor from './selectShirtColor';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<SelectShirtColor />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <SelectShirtColor />
                </Provider>)
    });
});