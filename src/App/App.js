import "./App.css";
import News from "../Components/News/News";
import Advertisement from "../Components/Advertisement/Advertisement";
import Search from "../Components/Search/Search";
// import Weather from "../Components/Weather/Weather";
// import Block from "../Components/Block/Block";

const news = [
  {
    id: 1,
    img: null,
    link: "https://yandex.ru/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam.",
  },
  {
    id: 2,
    img: null,
    link: "https://yandex.ru/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam.",
  },
  {
    id: 3,
    img: null,
    link: "https://yandex.ru/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam.",
  },
  {
    id: 4,
    img: null,
    link: "https://yandex.ru/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam.",
  },
  {
    id: 5,
    img: null,
    link: "https://yandex.ru/",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam.",
  },
];

function App() {
  return (
    <div className="app">
      <div className="top">
        <News data={news} />
        <Advertisement />
      </div>
      <Search />
      {/* <Advertisement />
      <div className="bottom">
        <Weather />
        <Block />
        <Block />
        <Block />
        <Block />
      </div> */}
    </div>
  );
}

export default App;
