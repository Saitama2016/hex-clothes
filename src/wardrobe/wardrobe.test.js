import React from 'react';
import { shallow } from 'enzyme';

import Wardrobe from './wardrobe';

describe.skip('<Wardrobe />', () => {
    it('Renders without crashing', ()=> {
        shallow(<Wardrobe />);
    });
})