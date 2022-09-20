import { Span } from "./Styles";

export const InputButton = (props) => {
  const { name, value, change, type } = props;

  return (
    <div className="wrap-input">
      <input
        autoComplete="on"
        className={value !== "" ? "has-val input" : "input"}
        type={type}
        value={value}
        onChange={change}
      />
      <Span className="focus-input" data-placeholder={name}></Span>
    </div>
  );
};
