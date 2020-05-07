import React from "react";
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListCounters from "./ListCounters";
configure({ adapter: new Adapter()})

let listCountersProps = {
    counters: [],
    saveCounters: jest.fn(),
    updateShowDelete: false,
    captIdToSave: {},
    idToSave: {},
    updateShowShare: false,
    setSearch: jest.fn(),
    search:jest.fn()
}

describe("ListCounters", () => {
    it('Search action when set the value in the input', () => {
        let wrapper = shallow(<ListCounters {...listCountersProps}/>)

        wrapper.find('input').at([0]).simulate('change', {target: {value: 'test'}});
        expect(listCountersProps.search.mock.calls).not.toEqual([[]]);
        expect(listCountersProps.setSearch.mock.calls).not.toEqual([[]]);
    });
    it('', () => {})

/*    it('Button cancel Search', () => {
        let wrapper = mount(<ListCounters {...listCountersProps}/>)
        const erase = jest.fn();

       wrapper.find('.inputSearch').at([0]).simulate('change', {target: {value: 'test erase'}});
        expect(listCountersProps.search.mock.calls).not.toEqual([[]]);
        wrapper.find('button').simulate('click');
        expect(erase).toHaveBeenCalled();
    });*/

})
