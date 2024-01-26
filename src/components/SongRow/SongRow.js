import { RxDragHandleDots1 } from "react-icons/rx";
import { FaPlay, FaStop } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "./SongRow.css";

export default function SongRow({
  songName,
  artistName,
  trackNumber,
  isFavorite,
  isAddedToQueue,
  addToQueue,
  addToFavorite,
  currentPlaying,
}) {
  return (
    <tr>
      <td className="play_button">
        <RxDragHandleDots1 className="icon" />
        {trackNumber !== currentPlaying ? (
          <FaPlay className="icon" />
        ) : (
          <FaStop className="icon" />
        )}
      </td>
      <td className="song_Name">{songName}</td>
      <td className="artist_Name"> {artistName} </td>
      <td>{trackNumber}</td>
      <td className="action_buttons">
        {isFavorite ? (
          <FaRegHeart
            className="icon favorite"
            onClick={() => addToFavorite(trackNumber)}
          />
        ) : (
          <FaRegHeart
            className="icon "
            onClick={() => addToFavorite(trackNumber)}
          />
        )}
        {isAddedToQueue ? (
          <MdDone
            className="icon added"
            onClick={() => addToQueue(trackNumber)}
          />
        ) : (
          <MdDone className="icon" onClick={() => addToQueue(trackNumber)} />
        )}
        <IoMdShareAlt className="icon" />
        <IoMdArrowDropdown className="icon" />
      </td>
    </tr>
  );
}
