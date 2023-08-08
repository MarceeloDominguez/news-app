import { fireEvent, render, screen } from "@testing-library/react-native";
import LinkOpenUrl from "../../src/components/LinkOpenUrl";
import { Linking } from "react-native";

const url =
  "https://ktla.com/news/local-news/beyond-bummed-california-based-beyond-meat-sees-revenue-nosedive/";

describe("Componente LinkOpenUrl", () => {
  test("Presionar el boton y abrir el link", () => {
    render(<LinkOpenUrl url={url} />);

    fireEvent.press(screen.getByLabelText("Abrir Link"));

    expect(Linking.openURL).toHaveBeenCalledWith(url);
  });
});
