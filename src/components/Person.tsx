import { PersonProps } from "./Person.types";

const Person = (props: PersonProps) => {
  return (
    <h4>
      {props.firstName} {props.lastName}
    </h4>
  );
};

export default Person;
