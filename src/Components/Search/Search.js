import Link from "../Link/Link";

const Search = (props) => {
  return (
    <div className="search">
      <nav className="navigation">
        <ul>
          <Link link="#" text="Видео" />
          <Link link="#" text="Картинки" />
          <Link link="#" text="Новости" />
          <Link link="#" text="Карты" />
          <Link link="#" text="Маркет" />
          <Link link="#" text="Переводчик" />
          <Link link="#" text="Эфир" />
          <Link link="#" text="еще" />
        </ul>
      </nav>
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
