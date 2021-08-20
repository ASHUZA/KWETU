const Select = ({ children, className, label, value }) => {
  return (
    <div>
      <label>{label}</label>
      <select className={className}>
        <option value={value}>{children}</option>
      </select>
    </div>
  );
};
export default Select;
