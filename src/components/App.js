import React, { useEffect, useState } from "react";
import flickr from "../apis/flickr";
import Gallery from "./Gallery";

import "./App.scss";

const App = () => {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    (async () => {
      const result = await flickr.get("", { params: { tags: "Nature" } });
      console.log(result.data.photos.photo);
      setPhotos(result.data.photos.photo);
    })();
  }, []);

  return (
    <div className="container">
      <ul>
        <Gallery photos={photos} />
      </ul>
    </div>
  );
};

export default App;
