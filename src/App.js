import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import "./styles/style.css";

const App = () => {
  const contacts = [
    { name: "John", number: "987654312", location: "Kathmandu" },
    { name: "Dave", number: "9812345678", location: "Pokhara" },
    { name: "Chris", number: "976512448", location: "Jhapa" },
  ];

  // Child to parent communication
  const addContactData = (contactData) => {
    console.log(contactData);
    contacts.push(contactData);
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
