// Use custom render method (so that the test also works with Redux)
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../common/util/test-utils";
import { Counter } from "../../components/Counter";

describe("components/Counter", () => {
  it("should be possible to reset the counter", async () => {
    const user = userEvent.setup();

    render(<Counter />);
    const resetButton = screen.getByText("Reset");
    await user.click(resetButton);

    expect(screen.getByText("0")).toBeTruthy();
  });

  it("should be possible to increment the counter", async () => {
    const user = userEvent.setup();

    render(<Counter />);
    // reset initial value to 0
    await user.click(screen.getByText("Reset"));

    const incrementButton = screen.getByText("+");
    await user.click(incrementButton);

    expect(screen.getByText("1")).toBeTruthy();
  });

  it("should be possible to decrement the counter", async () => {
    const user = userEvent.setup();

    render(<Counter />);
    // reset initial value to 0
    await user.click(screen.getByText("Reset"));
    await user.click(screen.getByText("+"));

    const decrementButton = screen.getByText("-");
    await user.click(decrementButton);

    expect(screen.getByText("0")).toBeTruthy();
  });

  // Additional test in case you worked on the respective bonus task
  it("should be NOT be possible to decrement the counter when it is zero", async () => {
    const user = userEvent.setup();

    render(<Counter />);
    // reset initial value to 0
    await user.click(screen.getByText("Reset"));

    const decrementButton = screen.getByText("-");
    await user.click(decrementButton);

    expect(screen.getByText("0")).toBeTruthy();
    expect(screen.queryByText("-1")).not.toBeInTheDocument();
  });
});
