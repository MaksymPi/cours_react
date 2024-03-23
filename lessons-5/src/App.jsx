import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


function App() {

const but1 = useRef();
const input1 = useRef();
const check1 = useRef();

const [users, setUsers] = useState([]);
const [photos, setPhotos] = useState([]);


const buttonListener = () =>{
// console.log(event.target.innerHTLM);
// console.log(but1.current);
// but1.current.style.background = 'red';
// console.log(input1.current.value);
console.log(check1.current.checked);
};

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
},[])

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPhotos(json))
},[])


  return (
    <>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <button ref={but1} onClick={buttonListener} >Push</button>
    <input type="text"  ref={input1}/>
    <input  type="checkbox" ref={check1}/>
    <ul>
      {users.map(e => <li key={e.id}>{e.name}</li>)}
    </ul>

    <ul>
      {photos.map(e => <li key={e.id}>
        <h3>{e.title}</h3>
        <img src={e.url} alt={e.title} />
        </li>)}
    </ul>
    </>
  );
}

export default App;
