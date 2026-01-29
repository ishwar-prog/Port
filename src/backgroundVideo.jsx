// src/components/BackgroundVideo.jsx
import React from "react";

const BackgroundVideo = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://assets.pinterest.com/ext/embed.html?id=948430002788477874"
        title="Background Embed"
        frameBorder="0"
        scrolling="no"
        allow="autoplay; fullscreen"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          transform: "scale(1.2)", // fills screen better
        }}
      />
    </div>
  );
};

export default BackgroundVideo;
