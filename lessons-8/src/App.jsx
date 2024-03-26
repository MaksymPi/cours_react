import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  increment,
  decrement,
  reload,
  addValue
} from './store/counterSlice';

const App = () => {

  const count = useSelector((state) => state.counterValue.count);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  function inc() {
    dispatch(increment());
  }

  function dec() {
    dispatch(decrement());
  }

  function add() {
    const val = Number(value)
    dispatch(addValue(isNaN(val)?0:val));
  }


  return (
    <div className='container'>
      <div>
        <h3>{count}</h3>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={()=> dispatch(reload())}>Reset</button>
        <input type="text" value={value}
        onChange={el=>setValue(el.target.value)}/>
        <button onClick={add}>Add value</button>
      </div>

    </div>
  )
}

export default App