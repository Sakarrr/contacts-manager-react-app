import { useState } from "react";
// import Dummy from "./Dummy";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const onClickHandler = () => {
    const contactData = { name, number: mobile, location };
    props.onContactAdded(contactData);
  };

  // const dummyClickHandler = () => {
  //   props.childFunction();
  // };

  return (
    <>
      <div className="simpleAdder">
        Contact Adder:
        <input
          type="text"
          value={name}
          placeholder="Contact Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={mobile}
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        ></input>
        <input
          type="text"
          value={location}
          placeholder="Contact Location"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <br />
        <button onClick={onClickHandler}>Click Me!</button>
      </div>
      {/* <Dummy onDummyClick={dummyClickHandler} /> */}
    </>
  );
};

export default ContactAdder;
