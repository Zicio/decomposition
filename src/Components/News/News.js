import moment from "moment";
import "moment/locale/ru";
import Item from "../Item/Item";
import Link from "../Link/Link";
import Rate from "../Rate/Rate";

const News = (props) => {
  const { data } = props;
  return (
    <div className="news">
      <ul className="sections">
        <Link link="#" text="Сейчас в СМИ" />
        <Link link="#" text="В Германии" />
        <Link link="#" text="Рекомендуем" />
      </ul>
      <span className="date">{moment().format("LLLL")}</span>
      <ul className="news-list">
        {data.map((el) => {
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
