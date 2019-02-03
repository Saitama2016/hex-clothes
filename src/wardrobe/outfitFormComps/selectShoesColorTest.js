import React from 'react';
import { shallow } from 'enzyme';

import SelectShoesColor from './selectShoesColor';


describe('<SelectPantsColor />', () => {
    it('Renders without crashing', () => {
        shallow(<SelectShoesColor />)
    })
})