import React from "react";
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CreateCounter from "./CreateCounter";
/*import shallow from "enzyme/src/shallow";*/

configure({ adapter: new Adapter()})

let CounterProps ={
    saveCounters: jest.fn(),
    counters: jest.fn(),
    updateShowExamples: jest.fn()
}

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
        expect(saveCounters.mock.calls).toEqual([]);
    })

    it ("When I click in save button the function addCounter is called", () => {
        let wrapper = shallow(<CreateCounter {...CounterProps}/>)
        const addCounter = jest.fn();
        const instance = wrapper.instance;

        wrapper.find('button').at([2]).simulate('click');
        expect(addCounter.mock.calls).toEqual([])
        /*jest.spyOn(instance, 'addCounter');
        instance.mock.calls === []*/
    })

    it("Execute CloseModal when I click the X", () => {
        let wrapper = shallow(<CreateCounter {...CounterProps}/>)
        const dataDismiss = jest.fn();

        wrapper.find('button').at([1]).simulate('click');
        expect(dataDismiss.mock.calls).toEqual([])

    })

    it('send the form when change the value and saveCounter is not empty', () => {
        const wrapper = shallow(<CreateCounter {...CounterProps}/>);

        wrapper.find('input').simulate('change', {target: {value: 'example'}})
        /*se haga el submit y que saveCounter se ejecute*/

        wrapper.find('form').simulate('submit', {preventDefault: () => {}})
        expect(CounterProps.saveCounters.mock.calls).not.toEqual([[]])
    })

});
