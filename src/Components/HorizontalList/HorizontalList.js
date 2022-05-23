//! Компонент, отвечающий за горизонтальные списки (навигацию)

import Link from "../Link/Link";
import "./HorizontalList.scss";

const HorisontalList = (props) => {
  const { selector, data } = props;
  return (
    <ul className={selector}>
      {data.map((el) => {
        return <Link key={el.id} link={el.link} text={el.text} />;
      })}
    </ul>
  );
};

export default HorisontalList;
