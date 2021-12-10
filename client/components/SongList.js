import React from "react";
import { useQuery, gql } from "@apollo/client";

const songs = gql`
  {
    songs {
      id
      title
    }
  }
`;

export const SongList = () => {
  const { loading, error, data } = useQuery(songs);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <ul className="collection">
      {data.songs.map((song) => (
        <li className="collection-item" key={song.id}>
          {song.title}
        </li>
      ))}
    </ul>
  );
};
