import { useState } from "react";


function App() {

  const [counter, setCounter] = useState(0)
  const [pcolor, setPcolor] = useState({background:'white'})
  const [val, setVal] = useState(0)
  const [arr, setArr] = useState([1,2,3,4,5])


  function increase() {
    setCounter(counter + 1);
    setPcolor({background:'green'})
  };
  function decrease() {
    setCounter(counter - 1);
    setPcolor({background:'red'})
  };

  function valSetter(event) {
    setVal(event.target.value)
  };

  const push = () => {
    // let temp = [...arr];
    // temp.push(1)
    // setArr(temp);
    // let temp = arr;
    // setArr([...temp,1]);
    setArr([...arr,1]);
  }

  return (
    <>
      <h1>{counter}</h1>
      <p style={pcolor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et sapiente totam, perspiciatis earum deserunt ipsum in laboriosam tempore enim maxime dolore porro nam! Quo sint sunt explicabo. Ut, inventore!</p>
      <button onClick={increase}>Increase +</button>
      <button onClick={decrease}>decrease -</button>

      <input type="range" onChange={valSetter} value = {val} />
      <h3>{val}</h3>
      <h3>Arr{arr}</h3>
      <button onClick={push}>Push</button>
      <ul>
        {arr.map((e,idx)=> <li key={idx}>{e}</li>)}
      </ul>
    </>
  );
}

export default App;
