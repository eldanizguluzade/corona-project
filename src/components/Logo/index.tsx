import "./index.scss";

interface ILogo {
  title?: string;
  img?: string;
  alt?: string;
}

const Logo = (props: ILogo) => {
  return (
    <div className="headline">
      <div className="headline-logo">
        <img src={props.img} alt={props?.alt} />
      </div>
      <div className="headline-text">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Logo;
