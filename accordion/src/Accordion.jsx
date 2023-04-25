/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { data } from "./data";
import "./Acoordion.css";

function Accordion() {
  const [isActive, setIsActive] = useState("");
  const handleClick = (id) => {
    setIsActive(isActive === id ? "" : id);
  };

  return (
    <div>
      {data.map((item, id) => (
        <div className="accordian">
          <div>
            <p>{item.title}</p>
            <button
              onClick={() => {
                handleClick(item.id);
              }}
            >
              {isActive === item.id ? "-" : "+"}
            </button>
          </div>
          <div>
            {isActive && <p>{isActive === item.id ? item.content : ""}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
