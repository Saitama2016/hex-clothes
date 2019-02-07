import React from 'react';
import { shallow } from 'enzyme';

import SelectShirtType from './selectShirtType';


describe.skip('<SelectShirtType />', () => {
    it('Renders without crashing', () => {
        shallow(<SelectShirtType />)
    })
})