import './App.css';
import { useState } from 'react';

/*
Knows how to:
- set up a basic "create-react-app" application.
- create a new component.
- add state to a component e.g. a Counter component with +/- buttons to increase/decrease the count value.
*/

function Button(props) {
  const handler = () => props.onClickFunction(props.value)
  return (
    <div>     
      <div>
        <button onClick={handler}>{props.ButtonAction}</button>
      </div>
    </div>
  )
}

function Display(props)
{
  return (
    <div>{props.displayNumber}</div>
  )
}

function App() {

  const[counter,setNumber] = useState(0);
  const increaseCount = (increaseValue) => setNumber(counter+increaseValue)
  const decreaseCount = (decreaseValue) => setNumber(counter-decreaseValue)
  return (
    <div style={{padding: "5px", margin: "2px"}}>
      <Button onClickFunction={increaseCount} value={1} ButtonAction={"Increase +"}></Button>
      <Button onClickFunction={decreaseCount} value={1} ButtonAction={"decrease -"}></Button>
      <Display displayNumber={counter}></Display>
    </div>
  );
}

export default App;