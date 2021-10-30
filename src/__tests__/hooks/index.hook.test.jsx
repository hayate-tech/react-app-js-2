import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/index";

afterEach(() => {
  jest.resetAllMocks();
});

// https://react-hooks-testing-library.com/usage/basic-hooks
test("useCounter", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current[0]).toEqual(0);
  expect(typeof result.current[1]).toBe("function");

  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toEqual(1);
});
