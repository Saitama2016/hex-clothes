import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import SelectPantsType from './selectPantsType';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<SelectPantsType />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <SelectPantsType />
                </Provider>)
    });
});