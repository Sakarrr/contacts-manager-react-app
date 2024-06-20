import Contact from "./components/Contact";
import "./styles/style.css";
import Wrapper from "./Wrapper";

const App = () => {
  const contacts = [
    { name: "John", number: "987654312", location: "Kathmandu" },
    { name: "Dave", number: "9812345678", location: "Pokhara" },
    { name: "Chris", number: "976512448", location: "Jhapa" },
  ];
  return (
    <>
      <Wrapper>
        {/* <Contact name="John" number="987654312" location="Kathmandu" />
        <Contact name="Dave" number="9812345678" location="Pokhara" />
        <Contact name="Chris" number="976512448" location="Jhapa" /> */}
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
      </Wrapper>
    </>
  );
};

export default App;
