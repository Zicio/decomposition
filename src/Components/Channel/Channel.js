//! Комопонет, отвечающий за отдельный телеканал

const Channel = (props) => {
  const { data } = props;
  return (
    <div className="channel">
      {data.time || "▶"} {data.tvProgramm} <span>{data.channel}</span>
    </div>
  );
};

export default Channel;
