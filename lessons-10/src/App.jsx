import { useState } from "react";
import ModalWnd from "./components/Modal/ModalWnd";

function App() {

  const [modalState, setModalState] = useState(false);

  return (
    <div className="App">
     <ModalWnd call={modalState} onDestroy={()=>setModalState(false)}/>
     <button onClick={()=>setModalState(true)}>ModalWnd</button>
    </div>
  );
}

export default App;
