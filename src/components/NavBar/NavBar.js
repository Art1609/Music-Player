import PlayAllButton from "../PlayAllButton";
import AddAllButton from "../AddAllButton";
import TrackNumberButton from "../TrackNumberButton/TrackNumberButton";
import FilterInput from "../FilterInput/FilterInput";
import { MusicPlayerContext } from "../../contexts/MusicPlayerContext";
import "./NavBar.css";
import { useContext } from "react";

export default function NavBar() {
  const { addToQueueAll, playAll, changeOrder, ascendingOrder } =
    useContext(MusicPlayerContext);
  return (
    <div className="nav_bar">
      <div className="action_buttons">
        <PlayAllButton playAll={playAll} />
        <AddAllButton addToQueueAll={addToQueueAll} />
      </div>
      <div className="filret_field">
        <TrackNumberButton
          changeOrder={changeOrder}
          ascendingOrder={ascendingOrder}
        />
        <FilterInput />
      </div>
    </div>
  );
}
