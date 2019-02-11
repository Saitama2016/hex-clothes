import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import SelectShoesColor from './selectShoesColor';

const mockStore = configureMockStore();
const store = mockStore({});


describe('<SelectShoesColor />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <SelectShoesColor />
                </Provider>)
    });
});