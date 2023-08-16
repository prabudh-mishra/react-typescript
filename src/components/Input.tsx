type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  // You can even type the function with the handlechange prop inside the function
  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event);
  //   };

  return (
    <>
      <input type="text" value={props.value} onChange={props.handleChange} />
      {/* <input type="text" value={props.value} onChange={handleInputChange} /> */}
    </>
  );
};

export default Input;
