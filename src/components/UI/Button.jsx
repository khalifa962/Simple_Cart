import style from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={`${props.className} ${style.button}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
