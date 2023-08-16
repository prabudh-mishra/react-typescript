import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    firstName: "John",
    lastName: "Doe",
  };

  const personList = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Simon",
      lastName: "Doe",
    },
  ];

  return (
    <div className="App">
      <Greet name="Prabudh" messageCount={10} isLoggedIn={true} />
      <Greet name="Lisa" messageCount={5} isLoggedIn={false} />
      <Person firstName={personName.firstName} lastName={personName.lastName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
