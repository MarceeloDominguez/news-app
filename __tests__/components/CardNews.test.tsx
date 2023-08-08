import { render } from "@testing-library/react-native";
import CardNews from "../../src/components/CardNews";
import { Article } from "../../src/interfaces/newsInterface";
import { formatDate } from "../../src/helpers/formatDate";
import { useNavigation } from "@react-navigation/native";

type Prop = {
  news: Article;
};

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

describe("Componente CardNews", () => {
  const news: Prop["news"] = {
    author: "Emma Roth",
    title:
      "Apple is taking applications for Vision Pro developer kits - The Verge",
    description: null,
    url: "https://deadline.com/2023/07/barbie-box-office-success-margot-robbie-greta-gerwig-1235446062/",
    urlToImage: null,
    publishedAt: new Date(),
    content: null,
  };

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: jest.fn(),
    });
  });

  test("Mostrar el titulo, autor y la fecha de la noticia en el componente", () => {
    const { getByText } = render(<CardNews article={news} />);

    const titleElement = getByText(news.title);
    const authorElement = getByText(news.author);
    const dateElement = getByText(formatDate(new Date(news.publishedAt)));

    expect(titleElement).toBeDefined();
    expect(authorElement).toBeDefined();
    expect(dateElement).toBeDefined();
  });
});
