import "./toolbar.css"
import { Button } from "react-bootstrap";
function Toolbar() {
  return (
    <div>
      <div className="tool-buttons">
        <div>
          <Button className="button">Select Tool</Button>
        </div>
        <div>
          <Button className="button">Move Tool</Button>
        </div>
        <div>
          <Button className="button">Closest Points Tool</Button>
        </div>
      </div>
      <div className="shape-buttons">
        <Button className="button">Triangle Tool</Button>
        <Button className="button">Square Tool</Button>
        <Button className="button">Hexagon Tool</Button>
      </div>
    </div>
  );
}

export default Toolbar;
