import { render } from "@testing-library/react-native";
import App from "../App";

describe("Componente <App />", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Renderiza correctamante el componente App", () => {
    expect(render(<App />)).toBeDefined();
  });
});
