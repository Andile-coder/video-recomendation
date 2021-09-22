import { React } from "react";
import axios from "axios";
import "../styles/dist/deleteBtn.css";

function DeleteButton(props) {
  const handleDelete = () => {
    axios
      .delete(`https://video-recomend.herokuapp.com/${props.id}`)
      .catch((e) => console.error(e));
    props.handleDeleteVideo(props.id);
  };
  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteButton;
