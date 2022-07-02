import "./Title.css";

function Title({ title, subTitle }) {
  return (
    <div className="title-block">
      <h1 className="title">{title}</h1>
      <h4 className="subTitle">{subTitle}</h4>
    </div>
  );
}

export default Title;
