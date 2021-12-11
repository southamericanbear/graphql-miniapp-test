import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export const SongCreate = () => {
  const [song, setSong] = useState("");
  const [addSong, { data, loading, error }] = useMutation(ADD_SONG);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong({
      variables: {
        title: song,
      },
    });
    setSong("");
    navigate("/");
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
