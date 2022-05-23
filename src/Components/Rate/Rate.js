const Rate = (props) => {
  const { type } = props;

  // ! Получаем курс
  // const getRate = async () => { TODO };
  // const rate = async () => await getRate();

  return (
    <li className="rate">
      {/* <span>
        {type} MOEX {rate}
      </span> */}
      <span>{type} MOEX 63.2</span>
    </li>
  );
};

export default Rate;
