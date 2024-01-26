import "./App.css";
import SongList from "./components/SongList/SongList";
import NavBar from "./components/NavBar/NavBar";
import MusicUploadForm from "./components/MusicUploadForm/MusicUploadForm";
import  MusicPlayerProvider  from "./contexts/MusicPlayerContext";

function App() {
  return (
   <MusicPlayerProvider >
    <div className="App">
      <NavBar />
      <SongList />
      <MusicUploadForm />
    </div>
  </MusicPlayerProvider> 
  );
}

export default App;
