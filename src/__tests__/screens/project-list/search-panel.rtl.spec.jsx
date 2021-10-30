import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  screen,
  act,
  queryByAttribute,
  queryAllByAttribute,
} from "@testing-library/react";
import { Input, Select } from "antd";
import {
  SearchSelect,
  SearchPanel,
} from "../../../screens/project-list/search-panel";

const queryByClass = queryByAttribute.bind(null, "class");
const queryAllByClass = queryAllByAttribute.bind(null, "class");

afterEach(cleanup);

describe("<SearchSelect />", () => {
  it("should handle search select", async () => {
    const setManagerIdSpy = jest.fn();
    const { queryByRole, queryByTestId, container } = render(
      <div data-testid="tested-search-select">
        <SearchSelect
          managerId=""
          setManagerId={setManagerIdSpy}
          managers={[
            { id: 1, name: "Tianyang Guan" },
            { id: 2, name: "Raymond" },
            { id: 3, name: "Vincent" },
            { id: 4, name: "Alex" },
          ]}
        />
      </div>
    );

    expect(container).toMatchSnapshot();

    screen.debug(container);

    // const rootSelect = queryByTestId("tested-search-select").firstChild;

    // https://github.com/ant-design/ant-design/issues/22074#issuecomment-868984152
    fireEvent.mouseDown(
      queryByTestId("tested-search-select"),
      "ant-select-selector"
    ); // this should open select in unit tests

    expect(await screen.findByText("Alex")).toBeInTheDocument();

    fireEvent.click(await screen.findByText("Alex"));

    expect(setManagerIdSpy).toHaveBeenCalledTimes(1);
    expect(setManagerIdSpy).toHaveBeenCalledWith(4);
  });
});
