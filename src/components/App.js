import React, { useState } from "react";
import flickr from "../apis/flickr";
import Search from "./Search";
import Gallery from "./Gallery";

import "./App.scss";

const App = () => {
  const [appState, setAppState] = useState({
    photos: [],
    loader: true,
  });

  const searchHandler = async (key) => {
    setAppState({ loader: true });
    const result = await flickr.get("", { params: { tags: key } });
    console.log("searched");
    console.log(result.data.photos.photo);
    setAppState({ photos: result.data.photos.photo, loader: false });
  };

  return (
    <div className="container">
      <Search searchHandler={searchHandler} />
      <ul>
        <Gallery state={appState} />
      </ul>
    </div>
  );
};

export default App;
