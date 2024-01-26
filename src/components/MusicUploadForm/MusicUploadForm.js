import { Input } from "antd";
import "./MusicUploadForm.css";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useState, useContext } from "react";
import { MusicPlayerContext } from "../../contexts/MusicPlayerContext";

export default function MusicUploadForm() {
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const { list, addMusic } = useContext(MusicPlayerContext);
  const uploadMusic = () => {
    addMusic({
      songName: songName,
      artistName: artistName,
      trackNumber: list.length + 1,
      isFavorite: false,
      isAddedToQueue: false,
    });
    setSongName("");
    setArtistName("");
  };

  return (
    <div className="upload-music-container">
      <h3>Upload Your Music</h3>
      <div className="upload-music-form">
        <Input
          value={songName}
          placeholder="Song name"
          onChange={(e) => setSongName(e.target.value)}
        />
        <Input
          value={artistName}
          placeholder="Artist name"
          onChange={(e) => setArtistName(e.target.value)}
        />
      </div>
      <div className="upload-buttons">
        <Upload
          fileList={[]}
          beforeUpload={() => false}
          onChange={uploadMusic}
          accept=".mp3,.wav"
        >
          <Button
            disabled={artistName.length === 0 || songName.length === 0}
            icon={<UploadOutlined />}
          >
            Choose file
          </Button>
        </Upload>
        {/* <Button>Upload</Button> */}
      </div>
    </div>
  );
}
