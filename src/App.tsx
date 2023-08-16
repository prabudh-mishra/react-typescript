import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      {/* Basic Props */}
      {/* <Greet name="Prabudh" messageCount={10} isLoggedIn={true} />
      <Greet name="Lisa" messageCount={5} isLoggedIn={false} />
      <Person firstName={personName.firstName} lastName={personName.lastName} />
      <PersonList names={personList} /> */}

      {/* Advanced Props */}
      {/* <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Vishwas" isLoggedIn={false} /> */}

      {/* Events as a prop */}
      <Button
        handleClick={(event, id) => console.log("Button is clicked", id)}
      ></Button>
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
    </div>
  );
}

export default App;
