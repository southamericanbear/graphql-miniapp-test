import React from "react";
import { Route, Routes } from "react-router-dom";
import { SongCreate } from "./SongCreate";
import { SongList } from "./SongList";

export default () => {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<SongList />} />
        <Route exact path="/new/song" element={<SongCreate />} />
      </Routes>
    </div>
  );
};
