import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import ClothesPicker from './pickClothes';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<ClothesPicker />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <ClothesPicker />
                </Provider>)
    })
})