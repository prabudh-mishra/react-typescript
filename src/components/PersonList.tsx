import Person from "./Person";
import { PersonProps } from "./Person.types";

type PersonListProps = {
  names: PersonProps[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <Person
          key={name.firstName}
          firstName={name.firstName}
          lastName={name.lastName}
        />
      ))}
    </div>
  );
};

export default PersonList;
