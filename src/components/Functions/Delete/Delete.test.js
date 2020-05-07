import React from "react";
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Delete from "./Delete";

configure({ adapter: new Adapter()})

let deleteProps = {
    updateShowDelete: jest.fn(),
    idToSave: jest.fn() ,
    updateShowShare: jest.fn(),
    saveCounters: jest.fn() ,
    counters: jest.fn()
}

describe('Delete Counter', () => {
    it('Open modal for delete', () => {
        const wrapper = shallow(<Delete {...deleteProps}/>);
        const dataToggle = jest.fn();

        wrapper.find('button').at([0]).simulate('click');
        expect(dataToggle.mock.calls).toEqual([]);

    })

    it('Cancel Delete', () => {
        const wrapper = shallow(<Delete {...deleteProps}/>);
        const dataDismiss = jest.fn();

        wrapper.find('button').at([1]).simulate('click');
        expect(dataDismiss.mock.calls).toEqual([]);
        expect(deleteProps.idToSave.mock.calls).not.toEqual([[]]);
        expect(deleteProps.counters.mock.calls).not.toEqual([[]]);
        expect(deleteProps.saveCounters.mock.calls).not.toEqual([[]]);
        expect(deleteProps.updateShowDelete.mock.calls).toEqual([[false]]);
        expect(deleteProps.updateShowShare.mock.calls).toEqual([[false]]);
    })

    it('Delete button', () => {
        const wrapper = shallow(<Delete {...deleteProps}/>);
        wrapper.find('button').at([2]).simulate('click');
        expect(deleteProps.idToSave.mock.calls).not.toEqual([[]]);
        expect(deleteProps.counters.mock.calls).not.toEqual([[]]);
        expect(deleteProps.saveCounters.mock.calls).not.toEqual([[]]);
        expect(deleteProps.updateShowDelete.mock.calls).not.toEqual([[]]);
        expect(deleteProps.updateShowShare.mock.calls).not.toEqual([[]]);
    })
})
