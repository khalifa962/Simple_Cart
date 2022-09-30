import style from "./ErrorModal.module.css";
import Button from "../UI/Button";
const ErrorModal = (props) => {
  return (
    <>
      <div
        onClick={props.dismissModal}
        className={`${props.className} ${style.backdrop}`}
      ></div>
      <div className={style.modal}>
        <div className={style.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={style.content}>{props.message}</div>
        <Button onClick={props.dismissModal} className={style.actions}>
          ok
        </Button>
      </div>
    </>
  );
};
export default ErrorModal;
