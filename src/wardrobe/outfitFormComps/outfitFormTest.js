import React from 'react';
import { shallow } from 'enzyme';

import { OutFitForm } from './outfitForm';

describe('<OutFitForm />', () => {
    it('Renders without crashing', () => {
        shallow(<OutFitForm />)
    })
})