import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Rating from "./_rating";
import axios from "axios";
import "../styles/dist/videos.css";
import DeleteButton from "./_deleteButton";
function Videos() {
  const [videos, setVideos] = useState([]);

  const handleDeleteVideo = (id) => {
    const newVideos = videos.filter((video) => video.id !== id);
    setVideos(newVideos);
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get("http://localhost:3000/")
        .catch((e) => console.error(e));
      setVideos(request.data);
    }
    fetchData();
  }, []);

  return (
    <div className="videos">
      <div className="videos_addvideo-btn">
        <Link to="/addvideo">
          <button>Add Video</button>
        </Link>
      </div>
      <section className="videos_section">
        {videos.map((video) => {
          return (
            <div key={video.id} className="videos_section_video">
              <h3>{video.title}</h3>
              <Rating rate={video.rating} id={video.id} />
              <div className="react_player">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  allowFullScreen
                  controls={true}
                  url={video.url}
                />
              </div>
              <DeleteButton
                id={video.id}
                handleDeleteVideo={handleDeleteVideo}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Videos;
