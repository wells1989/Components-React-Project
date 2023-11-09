import Button from "../components/Button";
import { GoBell, GoBlocked, GoBellSlash, GoDatabase, GoBellFill } from "react-icons/go";
import Panel from "../components/Panel";

function ButtonPage() {

  const handleClick = () => {
    alert("button clicked")
  }

  return (
    <Panel>

      <div className="flex justify-center m-3">
        <Button className="flex justify-center" primary outline rounded onClick={handleClick}>
          <GoBell />
          click me please
          </Button>
        
      </div>
      <div className="flex justify-center m-3">
        <Button className="flex justify-center" secondary onClick={handleClick}>
          <GoBlocked />
          see deal
          </Button>
      </div>
      <div className="flex justify-center m-3">
        <Button className="flex justify-center" success onClick={handleClick}>
          <GoBellSlash/>
          hide ads
          </Button>
      </div>
      <div className="flex justify-center m-3">
        <Button className="flex justify-center" warning onClick={handleClick}>
          <GoDatabase/>
          buy now
          </Button>
      </div>
      <div className="flex justify-center m-3">
        <Button className="flex justify-center" danger outline rounded onClick={handleClick}>
        <GoBellFill/>
          reserve
          </Button>
      </div>

      </Panel>
  );
}

export default ButtonPage;
