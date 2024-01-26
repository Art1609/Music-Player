import { Dropdown } from "antd";
import { DownOutlined, CaretRightOutlined } from "@ant-design/icons";
const handleButtonClick = () => {
  console.log("Play All button clicked");
};
const handleMenuClick = (e) => {
  console.log("Menu button clicked");
};

const { Button } = Dropdown;
const items = [
  {
    label: "Play first song",
    key: "1",
  },
  {
    label: "Play last song",
    key: "2",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default function PlayAllButton({ playAll }) {
  return (
    <>
      <Button menu={menuProps} onClick={playAll} icon={<DownOutlined />}>
        <CaretRightOutlined /> Play All
      </Button>
    </>
  );
}
