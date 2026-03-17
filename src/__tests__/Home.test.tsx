import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { useStore } from "@/store";

beforeEach(() => {
  useStore.setState({
    appName: "Demo App",
    welcomeMessage: "Hello Everyone, Welcome to my Demo",
  });
});

describe("Home page", () => {
  it("renders the welcome message from the store", () => {
    render(<Home />);
    expect(
      screen.getByText("Hello Everyone, Welcome to my Demo")
    ).toBeInTheDocument();
  });

  it("renders the app name from the store", () => {
    render(<Home />);
    expect(screen.getByText("Demo App")).toBeInTheDocument();
  });

  it("reflects store updates in the UI", () => {
    useStore.setState({ welcomeMessage: "Updated message" });
    render(<Home />);
    expect(screen.getByText("Updated message")).toBeInTheDocument();
  });
});
