import React from "react";
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Decrement from "./Decrement";

configure({ adapter: new Adapter()})

let decrementProps = {
    counter: jest.fn(),
    counters: jest.fn(),
    saveCounters: jest.fn()
}

describe('Decrement Component', () => {
    it('decrement button/icon', () => {
        let wrapper = mount(<Decrement {...decrementProps}/>)
        const decBtn = jest.fn();

        wrapper.find('i').simulate('click');
        expect(decBtn.mock.calls).toEqual([]);
        expect(decrementProps.counter.mock.calls).not.toEqual([[]]);
    })
})
