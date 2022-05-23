const Link = (props) => {
  const { link, text } = props;
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};

export default Link;
