import { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import NavBar from "./components/NavBar";
import "./styles/style.css";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  // Child to parent communication
  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  const clearAllContacts = () => {
    localStorage.removeItem("contacts");
    setContacts([]);
  };

  // const childFunctionHandler = () => {
  //   alert("Grand parent was called");
  // };

  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder
          onContactAdded={addContactData}
          // childFunction={childFunctionHandler}
        />
      </div>
      <div className="contact_list">
        <h3>Contact list:</h3>
        {/* Unique must be passed for multiple components render */}
        {contacts.map((contact) => (
          <Contact key={contact.id} data={contact}></Contact>
        ))}
        <button onClick={clearAllContacts} style={{ background: "#ff1919" }}>
          Clear All Contacts
        </button>
      </div>
    </>
  );
};

export default App;
