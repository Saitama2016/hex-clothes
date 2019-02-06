import React from 'react';
import { shallow } from 'enzyme';

import SelectShirtType from './selectShirtType';


describe('<SelectPantsColor />', () => {
    it('Renders without crashing', () => {
        shallow(<SelectShirtType />)
    })
})