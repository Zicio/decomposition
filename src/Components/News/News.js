//! Компонент, отвечающий за раздел "Новости"

import moment from "moment";
import "moment/locale/ru";
import HorisontalList from "../HorizontalList/HorizontalList";
import Item from "../Item/Item";
import Rate from "../Rate/Rate";
import "./News.scss";

const News = () => {
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

  const sections = [
    {
      id: 5,
      link: "https://yandex.ru/",
      text: "Сейчас в СМИ",
    },
    {
      id: 2,
      link: "https://yandex.ru/",
      text: "в Германии",
    },
    {
      id: 1,
      link: "https://yandex.ru/",
      text: "Рекомендуем",
    },
  ];

  return (
    <div className="news">
      <div className="news__sections">
        <HorisontalList selector="sections__list" data={sections} />
        <span className="date">{moment().format("LLLL")}</span>
      </div>
      <ul className="news-list">
        {news.map((el) => {
          return <Item key={el.id} data={el} />;
        })}
      </ul>
      <ul className="rates">
        <Rate type="USD" />
        <Rate type="EUR" />
        <Rate type="Нефть" />
      </ul>
    </div>
  );
};

export default News;
