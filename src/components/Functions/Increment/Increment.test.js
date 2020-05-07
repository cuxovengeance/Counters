import React from "react";
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Increment from "./Increment";

configure({ adapter: new Adapter()})

let incrementProps = {
    counter: jest.fn(),
    counters: jest.fn(),
    saveCounters: jest.fn()
}

describe('Increment Component', () => {
    it('Increment button/icon', () => {
        let wrapper = mount(<Increment {...incrementProps}/>)
        const incBtn = jest.fn();

        wrapper.find('i').simulate('click');
        expect(incBtn.mock.calls).toEqual([]);
        expect(incrementProps.counter.mock.calls).not.toEqual([[]]);
    })
})
