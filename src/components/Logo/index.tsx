import "./index.scss";

interface ILogo {
  title?: string;
  img?: string;
  alt?: string;
  path?: string;
}

const Logo = (props: ILogo) => {
  return (
    <a href={props?.path}>
      <div className="headline">
        <div className="headline-logo">
          <img src={props?.img} alt={props?.alt} />
        </div>
        <div className="headline-text">
          <h1>{props?.title}</h1>
        </div>
      </div>
    </a>
  );
};

export default Logo;
