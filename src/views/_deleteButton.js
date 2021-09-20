import { React } from "react";
import axios from "axios";
import "../styles/dist/deleteBtn.css";

function DeleteButton(props) {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/${props.id}`)
      .catch((e) => console.error(e));
    props.handleDeleteVideo(props.id);
  };
  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteButton;
