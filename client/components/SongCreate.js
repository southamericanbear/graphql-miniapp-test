import React, { useState } from "react";

export const SongCreate = () => {
  const [song, setSong] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(song);
  };
  return (
    <div>
      <h3>Create a new song</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
