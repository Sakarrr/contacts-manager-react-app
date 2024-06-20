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

  // const saveData = () => {
  //   localStorage.setItem("name", "xyz");
  // };

  // const getData = () => {
  //   const data = localStorage.getItem("name");
  //   console.log(data);
  // };

  // const clearData = () => {
  //   localStorage.removeItem("name");
  // };

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
        {/* <button onClick={saveData}>Save data</button>
        <button onClick={getData}>Get data</button>
        <button onClick={clearData}>Clear data</button> */}
      </div>
      {/* <Dummy onDummyClick={dummyClickHandler} /> */}
    </>
  );
};

export default ContactAdder;
