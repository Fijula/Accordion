// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./App.css";
import Accordion from "./Accordion";

function App() {
  return (
    <>
      <img
        src="https://www.cybertill.com/wp-content/uploads/2020/08/10-questions-charity.png"
        alt="React logo"
        style={{ width: "30rem" }}
      />
      <div>
        <h1>FAQ</h1>
        <Accordion />
      </div>
    </>
  );
}

export default App;
