import "./styles.css";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
export default function App(props) {
  const [users, setUsers] = useState([]);
  const getUsers = (getName, getAge) => {
    setUsers((prevState) => {
      return [...prevState, { name: getName, age: getAge, id: Math.random() }];
    });
    // console.log(data1, data2);
    // return data;
  };
  return (
    <div className="App">
      <AddUser getUsers={getUsers} />
      <UsersList users={users} />
    </div>
  );
}
