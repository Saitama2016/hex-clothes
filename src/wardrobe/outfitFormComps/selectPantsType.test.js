import React from 'react';
import { shallow } from 'enzyme';

import SelectPantsType from './selectPantsType';

describe('<SelectPantsType />', () => {
    it('Renders without crashing', () => {
        shallow(<SelectPantsType />)
    })
})