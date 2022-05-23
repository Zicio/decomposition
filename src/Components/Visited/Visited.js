//! Компонент, отвечающий за отдельные посещаемые разделы

const Visited = (props) => {
  const { data } = props;
  return (
    <div className="visited-card">
      <span className="card-title">{data.title}</span> -{" "}
      <span className="card-text">{data.text}</span>
    </div>
  );
};

export default Visited;
