const Input = ({ label, type, className, required }) => {
  // const capitalize = (value) => {
  //   value.toUpperCase();
  // };
  return (
    <div className={className}>
      <label>{label}</label>
      <input type={type} required={required} />
    </div>
  );
};

export default Input;
