//! Рекламный компонент

const Advertisement = (props) => {
  const { url } = props;
  const fetchApi = async () => {
    const response = await fetch(url);
    if (response.ok) {
      return response;
    }
  };
  const data = async () => await fetchApi();

  // Проверяем response, для уточнения вида компонента
  if (data.title && data.text) {
    return (
      <div className="advertisement">
        {/* <a href={data.link}> */}
        <a href="https://yandex.ru/">
          <img src={data.img} alt="Реклама-картинка" />
          {/* <span>{data.title}</span> */}
          <span>Реклама-текст</span>
          {/* <span>{data.text}</span> */}
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
            eligendi?
          </span>
        </a>
      </div>
    );
  }
  return (
    <div className="advertisement">
      {/* <a href={data.link}> */}
      <a href="https://yandex.ru/">
        <img src={data.img} alt="Реклама-картинка" />
      </a>
    </div>
  );
};

export default Advertisement;
