import SongRow from "../SongRow/SongRow";
import "./SongList.css";
import { useContext } from "react";
import { MusicPlayerContext } from "../../contexts/MusicPlayerContext";

export default function SongList() {
  const { list, addToQueue, addToFavorite, currentPlaying } =
    useContext(MusicPlayerContext);

  return (
    <table className="song_list">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Song Name</th>
          <th>Artist Name</th>
          <th>Track</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <SongRow
            key={item.trackNumber}
            {...item}
            addToQueue={addToQueue}
            addToFavorite={addToFavorite}
            currentPlaying={currentPlaying}
          />
        ))}
      </tbody>
    </table>
  );
}
