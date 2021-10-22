import { renderHook } from "@testing-library/react-hooks";
import { useMount } from "../../../screens/utils/index";

afterEach(() => {
  jest.resetAllMocks();
});

test("useMount", () => {
  const mockCallback = jest.fn();
  renderHook(() => useMount(mockCallback));

  expect(mockCallback).toHaveBeenCalledTimes(1);
});
