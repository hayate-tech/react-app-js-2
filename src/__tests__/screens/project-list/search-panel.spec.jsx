import React from "react";
import { Input, Select } from "antd";
import { SearchPanel } from "../../../screens/project-list/search-panel";
import { shallow } from "enzyme";

describe("../../screens/project-list/list", () => {
  const makeProps = (override) => ({
    managers: [
      { id: 1, name: "Tianyang Guan" },
      { id: 2, name: "Raymond" },
      { id: 3, name: "Vincent" },
      { id: 4, name: "Alex" },
    ],
    managerId: "",
    projectName: "",
    setManagerId: () => {},
    setProjectName: () => {},
    ...override,
  });

  it("should trigger onChange", () => {
    const setProjectNameSpy = jest.fn();
    const setManagerIdSpy = jest.fn();

    const props = makeProps({
      setProjectName: setProjectNameSpy,
      setManagerId: setManagerIdSpy,
    });
    const wrapper = shallow(<SearchPanel {...props} />);
    wrapper
      .find(Input)
      .props()
      .onChange({ target: { value: "123" } });

    expect(setProjectNameSpy).toHaveBeenCalledTimes(1);
    expect(setProjectNameSpy).toHaveBeenCalledWith("123");
    expect(setManagerIdSpy).not.toHaveBeenCalled();
  });

  it("should trigger SearchSelect onChange", () => {
    const setManagerIdSpy = jest.fn();

    const props = makeProps({ setManagerId: setManagerIdSpy });
    const wrapper = shallow(<SearchPanel {...props} />);
    console.log(wrapper.find("Memo()").dive().debug());

    wrapper.find("Memo()").dive().find(Select).props().onChange("123");

    expect(setManagerIdSpy).toHaveBeenCalledTimes(1);
    expect(setManagerIdSpy).toHaveBeenCalledWith("123");
  });
});
