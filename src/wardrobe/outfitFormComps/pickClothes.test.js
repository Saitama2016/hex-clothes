import React from 'react';
import { shallow } from 'enzyme';

import ClothesPicker from './pickClothes';

describe.skip('<ClothesPicker />', () => {
    it('Renders without crashing', () => {
        shallow(<ClothesPicker />)
    })
})