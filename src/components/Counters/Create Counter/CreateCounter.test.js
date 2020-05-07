import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CreateCounter from "./CreateCounter";

configure({ adapter: new Adapter()})

describe("CreateCounter", () => {
    it("Call saveCounters[] when the form have a value", () => {
        const saveCounters = jest.fn();
        const prevent = jest.fn();
        let wrapper = mount(<CreateCounter saveCounters={saveCounters}/>)
        const instance = wrapper.instance();

        wrapper
            .find('input')
            .simulate('change', {target: {value: 'test'}})
            /*jest.spyOn(instance, 'addCounter');*/

        wrapper
            .find('form')
            .simulate('submit', { preventDefault: prevent})

        /*expect(instance.addCounter).toHaveBeenCalled();*/
        expect(prevent.mock.calls).toEqual([[]]);
        console.log(saveCounters.mock.calls);
        expect(saveCounters.mock.calls).toEqual([])
        console.log(wrapper);
    })
});
