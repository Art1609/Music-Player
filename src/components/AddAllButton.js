import { Dropdown } from "antd";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
const handleButtonClick = () => {
  console.log("Add All button clicked");
};
const handleMenuClick = (e) => {
  console.log("Menu button clicked");
};

const { Button } = Dropdown;
const items = [
  {
    label: "Add first song",
    key: "1",
  },
  {
    label: "Add last song",
    key: "2",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default function AddAllButton({addToQueueAll}) {
  return (
    <>
      <Button

        menu={menuProps}
        onClick={addToQueueAll}
        icon={<DownOutlined />}
      >
        <PlusOutlined /> Add All
      </Button>
    </>
  );
}
