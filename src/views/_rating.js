import { React, useState } from "react";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

import axios from "axios";
function Rating(props) {
  const [rating, setRating] = useState(props.rate);

  const handleUpVote = () => {
    axios
      .put(`http://localhost:3000/${props.id}`, { rating_value: +1 })
      .catch((e) => console.error(e));
    setRating(rating + 1);
  };

  const handleDownVote = () => {
    axios
      .put(`http://localhost:3000/${props.id}`, { rating_value: -1 })
      .catch((e) => console.error(e));
    setRating(rating - 1);
  };

  return (
    <div className="video_btns">
      <FontAwesomeIcon onClick={handleUpVote} icon={faThumbsUp} size="3x" />
      {rating} Votes
      <FontAwesomeIcon onClick={handleDownVote} icon={faThumbsDown} size="3x" />
    </div>
  );
}

export default Rating;
