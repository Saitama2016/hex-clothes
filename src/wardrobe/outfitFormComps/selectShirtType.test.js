import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import SelectShirtType from './selectShirtType';

const mockStore = configureMockStore();
const store = mockStore({});


describe('<SelectShirtType />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <SelectShirtType />
                </Provider>)
    });
});