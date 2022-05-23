//! Компонент, отвечающий за отдельную новость

import "./Item.scss";

const Item = (props) => {
  const { data } = props;
  return (
    <li className="news-item">
      <a href={data.link}>
        <img src="data.img" alt="Иконка" />
        <span>{data.text}</span>
      </a>
    </li>
  );
};

export default Item;
