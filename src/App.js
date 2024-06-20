import { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import "./styles/style.css";

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Child to parent communication
  const addContactData = (contactData) => {
    setContacts([contactData, ...contacts]);
  };

  // const childFunctionHandler = () => {
  //   alert("Grand parent was called");
  // };

  return (
    <>
      <div className="contact_adder">
        <ContactAdder
          onContactAdded={addContactData}
          // childFunction={childFunctionHandler}
        />
      </div>
      <div className="contact_list">
        <h3>Contact list:</h3>
        {contacts.map((contact) => (
          <Contact data={contact}></Contact>
        ))}
      </div>
    </>
  );
};

export default App;
