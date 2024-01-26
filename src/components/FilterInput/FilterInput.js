import { Input } from "antd";
import "./FilterInput.css";

export default function FilterInput() {
  return (
    <div>
      <Input.Search className="input" placeholder="Filter" />
    </div>
  );
}
