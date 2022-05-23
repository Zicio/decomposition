//! Компонент, отвечающий за блок поисковой строки

import HorisontalList from "../HorizontalList/HorizontalList";
import "./Search.scss";

const Search = () => {
  const sections = [
    {
      id: 5,
      link: "https://yandex.ru/",
      text: "Видео",
    },
    {
      id: 2,
      link: "https://yandex.ru/",
      text: "Картинки",
    },
    {
      id: 1,
      link: "https://yandex.ru/",
      text: "Новости",
    },
    {
      id: 4,
      link: "https://yandex.ru/",
      text: "Карты",
    },
    {
      id: 7,
      link: "https://yandex.ru/",
      text: "Маркет",
    },
    {
      id: 8,
      link: "https://yandex.ru/",
      text: "Переводчик",
    },
    {
      id: 4089,
      link: "https://yandex.ru/",
      text: "Эфир",
    },
    {
      id: 6789,
      link: "https://yandex.ru/",
      text: "еще",
    },
  ];

  return (
    <div className="search">
      <HorisontalList selector="sections__list" data={sections} />
      <form className="form">
        <input type="search" className="form__field" />
        <button className="form__submit" type="submit">
          Найти
        </button>
      </form>
      <span>
        Найдется всё! Например{" "}
        <span className="example">Lorem ipsum dolor sit amet.</span>
      </span>
    </div>
  );
};

export default Search;
