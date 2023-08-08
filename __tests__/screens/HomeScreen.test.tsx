import { render } from "@testing-library/react-native";
import HomeScreen from "../../src/screens/HomeScreen";

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

describe("Componente HomeScreen", () => {
  beforeEach(() => {
    render(<HomeScreen />);
  });

  test("Renderizar el titulo", () => {
    expect(render(<HomeScreen />).getByText("Breaking News"));
  });

  test("Debe de tener un array vacio antes de llamar a la api", () => {
    expect(
      render(<HomeScreen />).queryAllByTestId("flatlis-container").length
    ).toEqual(0);
  });
});
