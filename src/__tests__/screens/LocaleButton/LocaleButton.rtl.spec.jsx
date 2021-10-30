import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import LocaleButton from "../../../screens/LocaleButton";

afterEach(cleanup);

describe("<LocaleButton />", () => {
  it("should render a default locale Button", () => {
    const { queryByTestId, queryByText } = render(<LocaleButton />);

    expect(queryByTestId("locale-button")).toBeInTheDocument();
    // expect(queryByText("cn")).toBeInTheDocument();
  });

  it("should show 'cn' when click the 'en' button", () => {
    const { queryByText } = render(<LocaleButton />);

    fireEvent.click(queryByText("cn").parentNode);
    expect(queryByText("en")).toBeInTheDocument();

    fireEvent.click(queryByText("en").parentNode);
    expect(queryByText("cn")).toBeInTheDocument();
  });
});
