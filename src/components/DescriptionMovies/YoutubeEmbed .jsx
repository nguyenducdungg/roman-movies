import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TrailerContext } from "../Layout";

const YoutubeEmbed = ({ embedId }) => {
  const { updateStatus } = useContext(TrailerContext);
  return (
    <div className="modal is-active">
      {/* <div className="modal-background"></div> */}
      <div className="modal-content">
        <div className="modal-close" aria-label="close">
          <i class="fas fa-times" onClick={updateStatus}></i>
        </div>
        <div className="video-responsive embed-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

      </div>
    </div>
  )
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
