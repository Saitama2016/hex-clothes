import React from 'react';
import { shallow } from 'enzyme';

import { SelectPantsColor } from './selectPantsColor';

describe('<SelectPantsColor />', () => {
    it('Renders without crashing', () => {
        shallow(<SelectPantsColor />)
    })
})