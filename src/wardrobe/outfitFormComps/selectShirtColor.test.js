import React from 'react';
import { shallow } from 'enzyme';

import SelectShirtColor from './selectShirtColor';

describe('<SelectShirtColor />', () => {
    it('Renders without crashing', () => {
        shallow(<SelectShirtColor />)
    })
})