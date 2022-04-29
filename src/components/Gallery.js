import React from "react";

const Gallery = ({ state: { photos, loader } }) => {
  const renderPhotos = (photos) => {
    return photos.map(({ server, id, secret, title }) => {
      return (
        <li key={id}>
          <img
            src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
            alt={title}
          />
        </li>
      );
    });
  };

  return <>{(photos && renderPhotos(photos)) || (loader && "Loading")}</>;
};

export default Gallery;
