const Button = ({ title, className, onClickMethode }) => {
  return (
    <div className={className} onClick={onClickMethode}>
      {title}
    </div>
  );
};

export default Button;
