/* eslint-disable jsx-a11y/anchor-is-valid */
//! Универсальный компонент для нижних блоков

import "./Block.scss";

const Block = (props) => {
  const { title, selector } = props;
  return (
    <div className={selector}>
      <a href="#">{title}</a>
      {props.children}
    </div>
  );
};

export default Block;
