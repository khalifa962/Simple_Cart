import style from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={`${props.className} ${style.card}`}>{props.children}</div>
  );
};
export default Card;
