import { useState } from "react";
import { Chris, Dave, John } from "./Persons";

const ContactAdder = () => {
  const [name, setName] = useState("John");

  const onClickHandler = () => {
    setName("Dave");
    console.log("Clicked!");
  };

  const onHoverHandler = () => {
    setName("Chris");
    console.log("Clicked!");
  };

  let resultsCard;

  if (name === "Dave") {
    resultsCard = <Dave />;
  } else if (name === "Chris") {
    resultsCard = <Chris />;
  } else if (name === "John") {
    resultsCard = <John />;
  }
  return (
    <>
      Contact Adder:
      <button onClick={onClickHandler} onMouseOver={onHoverHandler}>
        Click Me!
      </button>
      {/* My name is {name} {name === "Shyam" ? "I am Dad." : "I am son"} */}
      My name is {name} {resultsCard}
    </>
  );
};

export default ContactAdder;
