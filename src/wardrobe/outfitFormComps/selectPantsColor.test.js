import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import SelectPantsColor from './selectPantsColor';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<SelectPantsColor />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <SelectPantsColor />
                </Provider>)
    });
});