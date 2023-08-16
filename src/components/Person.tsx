type PersonProps = {
  firstName: string;
  lastName: string;
};

const Person = (props: PersonProps) => {
  return (
    <h4>
      {props.firstName} {props.lastName}
    </h4>
  );
};

export default Person;
