import { useState } from "react";
// import Dummy from "./Dummy";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    const contactData = {
      id: Math.random(),
      name,
      number: mobile,
      location,
    };
    console.log(typeof mobile);
    if (
      name.length < 1 ||
      (mobile.length < 1 && typeof mobile !== Number) ||
      location < 1
    ) {
      alert("Please fill all data correctly");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
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
        <h3>Contact Adder:</h3>
        <form onSubmit={onFormSubmitHandler}>
          <br />
          <input
            type="text"
            value={name}
            placeholder="Contact Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="number"
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
          <button>Add Contacts</button>
        </form>
       
        {/* <button onClick={saveData}>Save data</button>
        <button onClick={getData}>Get data</button>
        <button onClick={clearData}>Clear data</button> */}
      </div>
      {/* <Dummy onDummyClick={dummyClickHandler} /> */}
    </>
  );
};

export default ContactAdder;
