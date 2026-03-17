import { useStore } from "@/store";

// Reset the store between tests
beforeEach(() => {
  useStore.setState({
    appName: "Demo App",
    welcomeMessage: "Hello Everyone, Welcome to my Demo",
  });
});

describe("Zustand store – appSlice", () => {
  it("has the correct initial state", () => {
    const { appName, welcomeMessage } = useStore.getState();
    expect(appName).toBe("Demo App");
    expect(welcomeMessage).toBe("Hello Everyone, Welcome to my Demo");
  });

  it("setWelcomeMessage updates the welcomeMessage", () => {
    useStore.getState().setWelcomeMessage("New welcome message");
    expect(useStore.getState().welcomeMessage).toBe("New welcome message");
  });

  it("setWelcomeMessage does not affect appName", () => {
    useStore.getState().setWelcomeMessage("Another message");
    expect(useStore.getState().appName).toBe("Demo App");
  });
});
