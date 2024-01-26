import { Button } from "antd";
import { HiArrowsUpDown } from "react-icons/hi2";
import { DownOutlined } from "@ant-design/icons";
import "./TrackNumberButton.css";

export default function TrackNumberButton({ changeOrder, ascendingOrder }) {
  return (
    <Button onClick={() => changeOrder(!ascendingOrder)} className="button">
      <HiArrowsUpDown /> Track Nu... <DownOutlined />
    </Button>
  );
}
