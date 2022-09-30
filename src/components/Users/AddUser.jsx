import { useState } from "react";
import Card from "../UI/Card";
import style from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [userNameInput, setUserNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();
  const dismissModal = () => {
    setError();
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userNameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: "Invalid Name Or Age!",
        message: "Please Enter A Valid Data And Re-submit"
      });
      return;
    }
    if (+ageInput < 1) {
      setError({
        title: "Invalid Name Or Age!",
        message: "Please Enter A Valid Data And Re-submit"
      });
      return;
    }
    props.getUsers(userNameInput, ageInput);
    // console.log(userNameInput, ageInput);
    setAgeInput("");
    setUserNameInput("");
  };

  const userNameHandler = (e) => setUserNameInput(e.target.value);

  const ageHandler = (e) => setAgeInput(e.target.value);

  return (
    <>
      {error && (
        <ErrorModal
          dismissModal={dismissModal}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={userNameInput}
            type="text"
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            value={ageInput}
            type="number"
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
