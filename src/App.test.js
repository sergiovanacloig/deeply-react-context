import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
  const originalLog = console.log;
  afterEach(() => (console.log = originalLog));
  beforeEach(() => (console.log = jest.fn()));

  test("renders app correctly", () => {
    render(<App />);

    expect(screen.getByText("HEADER")).toBeVisible();
    expect(screen.getByPlaceholderText("Type something...")).toBeVisible();
    expect(console.log).toHaveBeenCalledWith("RENDER HEADER");
    expect(screen.getByText("LIST")).toBeVisible();
    expect(console.log).toHaveBeenCalledWith("RENDER LIST");
    expect(screen.getByText("Search value: Default text")).toBeVisible();
    expect(console.log).toHaveBeenCalledWith("RENDER SEARCH");
    expect(screen.getByText("Counter value: 0")).toBeVisible();
    expect(console.log).toHaveBeenCalledWith("RENDER COUNTER");
    expect(
      screen.getByText("Open the browser console to see the magic ⚡")
    ).toBeVisible();
  });

  test("checks if a change in the state only rerenders the components that are using the context value", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Type something...");

    expect(console.log).toHaveBeenNthCalledWith(1, "RENDER HEADER");
    expect(console.log).toHaveBeenNthCalledWith(2, "RENDER LIST");
    expect(console.log).toHaveBeenNthCalledWith(3, "RENDER SEARCH");
    expect(console.log).toHaveBeenNthCalledWith(4, "RENDER COUNTER");
    expect(console.log).toHaveBeenCalledTimes(4);

    userEvent.type(input, "H");

    expect(console.log).toHaveBeenNthCalledWith(5, "RENDER HEADER");
    expect(console.log).not.toHaveBeenNthCalledWith(6, "RENDER LIST");
    expect(console.log).toHaveBeenNthCalledWith(6, "RENDER SEARCH");
    expect(console.log).toHaveBeenNthCalledWith(7, "RENDER COUNTER");
    expect(console.log).toHaveBeenCalledTimes(7);
  });
});
