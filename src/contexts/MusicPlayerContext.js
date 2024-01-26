import { createContext, useState } from "react";
export const MusicPlayerContext = createContext();

const initialList = [
  {
    songName: "Prayers",
    artistName: "Miyagi",
    trackNumber: 1,
    isFavorite: false,
    isAddedToQueue: false,
  },
  {
    songName: "Umbrella",
    artistName: "Rihanna",
    trackNumber: 2,
    isFavorite: false,
    isAddedToQueue: false,
  },
  {
    songName: "Sari Sirun Yar",
    artistName: "David Greg",
    trackNumber: 3,
    isFavorite: false,
    isAddedToQueue: false,
  },
];

const MusicPlayerProvider = ({ children }) => {
  const [list, setList] = useState(initialList);
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  // Remove song from playing queue

  const removeFromQueue = (trackNumber) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.trackNumber === trackNumber
          ? { ...item, isAddedToQueue: false }
          : item
      )
    );
  };
  // Play all songs that added to queue
  const playAll = async () => {
    const playingQueue = list
      .filter((item) => item.isAddedToQueue)
      .map((item) => item.trackNumber);
    for (let currentTrackNumber of playingQueue) {
      setCurrentPlaying(currentTrackNumber);
      setTimeout(() => {
        removeFromQueue(currentTrackNumber);
      }, 0);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
    setCurrentPlaying(null);
  };
  // Add new music to our song list
  const addMusic = (music) => {
    setList([...list, music]);
  };
  //Add song to playing queue
  const addToQueue = (id) => {
    setList(
      list.map((i) => {
        if (i.trackNumber === id) {
          return {
            ...i,
            isAddedToQueue: !i.isAddedToQueue,
          };
        }
        return i;
      })
    );
  };
  // Add all songs to playing queue
  const addToQueueAll = () => {
    setList(
      list.map((i) => {
        return {
          ...i,
          isAddedToQueue: true,
        };
      })
    );
  };
  //Add song to favorites songs
  const addToFavorite = (id) => {
    setList(
      list.map((i) => {
        if (i.trackNumber === id) {
          return {
            ...i,
            isFavorite: !i.isFavorite,
          };
        }

        return i;
      })
    );
  };
  //Changes order of song list in ascending order or descending order
  const changeOrder = (isAscending) => {
    setAscendingOrder(isAscending);
    const newArray = list.map((item) => item);
    newArray.sort((a, b) =>
      isAscending
        ? a.trackNumber - b.trackNumber
        : b.trackNumber - a.trackNumber
    );
    setList(newArray);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        list,
        addMusic,
        addToQueue,
        addToFavorite,
        addToQueueAll,
        currentPlaying,
        playAll,
        ascendingOrder,
        changeOrder,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayerProvider;
