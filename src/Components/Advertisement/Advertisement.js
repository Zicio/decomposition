const Advertisement = () => {
  const fetchApi = async () => {
    const response = await fetch("url");
    if (response.ok) {
      return response;
    }
  };
  const data = async () => await fetchApi();
  return (
    <div>
      {/* <a href={data.link}> */}
      <a href="https://yandex.ru/">
        <img src={data.img} alt="Реклама картинка" />
        {/* <span>{data.title}</span> */}
        <span>Реклама</span>
        {/* <span>{data.text}</span> */}
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
          eligendi?
        </span>
      </a>
    </div>
  );
};

export default Advertisement;
