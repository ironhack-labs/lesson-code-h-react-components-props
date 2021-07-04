function Greeting (props) {
  console.log(props);

  return (
    <div>
      <u>Hello {props.firstName}!</u>
    </div>
  );
}

export default Greeting;