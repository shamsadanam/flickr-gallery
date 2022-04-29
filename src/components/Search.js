import React, { useState } from "react";
import Button from "@mui/material/Button";

const Search = ({ searchHandler }) => {
  const [key, setKey] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();
    searchHandler(key);
  };
  return (
    <form action="">
      <input
        type="text"
        placeholder="Enter Search Terms"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <Button varient="contained" onClick={onClickHandler}>
        Search
      </Button>
    </form>
  );
};

export default Search;
