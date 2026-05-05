import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import Counter from "./Counter";

describe("Counter", () => {
  test("with only first param", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("descrement", async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await userEvent.setup().click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });

  test("increment", async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await userEvent.setup().click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });
});
