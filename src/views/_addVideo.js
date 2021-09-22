import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/dist/addvideo.css";

function AddVideo() {
  const [data, setData] = useState({ title: "", url: "" });
  const Submit = (e) => {
    e.preventDefault();
    if (!data.title.trim() || !data.url.trim()) {
      alert("All fields are mandatory");
    } else {
      const p =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      if (!data.url.match(p)) {
        alert("Please enter a youtube valid url");
      } else {
        async function createPost() {
          axios
            .post("http://localhost:3000/", { data: data })
            .catch((e) => console.log(e));
        }
        createPost();
      }
    }
  };
  return (
    <div className="addVideo">
      <div className="addvideo_videoList-btn">
        <Link to="/">
          <button>Video List</button>
        </Link>
      </div>
      <form className="addVideo_form" onSubmit={Submit}>
        <label>
          Title:
          <input
            className="addVideo_form_title"
            placeholder="Video Title..."
            type="name"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </label>
        <label>
          URL:
          <input
            className="addVideo_form_url"
            placeholder="Video Url..."
            type="url"
            onChange={(e) => setData({ ...data, url: e.target.value })}
          />
        </label>
        <button className="addVideo_form_btn" type="submit">
          Submit
        </button>
      </form>{" "}
    </div>
  );
}

export default AddVideo;
