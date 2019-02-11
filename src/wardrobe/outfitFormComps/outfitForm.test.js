import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import OutFitForm from './outfitForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<OutFitForm />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}>
                    <OutFitForm />
                </Provider>)
    })
})