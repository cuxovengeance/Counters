import React from "react";
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Share from "./Share";

configure({ adapter: new Adapter()})

let ShareProps = {
    idToSave: jest.fn()
}

describe('Share' , () => {
    it('Copy to Clipboard Button', () => {
        let wrapper = mount(<Share {...ShareProps}/>);
        const alertSuccess = jest.fn();

        wrapper.find('button').at([0]).simulate('click');
        expect(alertSuccess.mock.calls).toEqual([]);
    })
})
