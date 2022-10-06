import React from "react";
import Title from "./Title";
import RatingBox from "./RatingBox";
import Modal from "./Modal";

function App() {

  const [value, setValue] = React.useState(null);
  const [modalValue, setModalValue] = React.useState(false);
  const [boxValue, setBoxValue] = React.useState(true);

  return (
    <div style={mainStyle}>
    <Title />

    <RatingBox 
      value={value}
      setValue={setValue}
      setModalValue={setModalValue}
      boxValue={boxValue}
      setBoxValue={setBoxValue}
    />

    <Modal
      value={value}
      modalValue={modalValue}
      setModalValue={setModalValue}
      setBoxValue={setBoxValue}
      setValue={setValue}
    />
    </div>
  );
}

export default App;


const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}