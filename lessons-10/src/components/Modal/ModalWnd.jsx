import './ModalWnd.css'

import React from 'react'

const ModalWnd = ({call, onDestroy}) => {
    if(!call){
        return null
    }

    const closeWnd = (event) => {
        if(event.target.className  === 'modal'){
            onDestroy();
        }
    }

  return (
    <div className='modal' onClick={closeWnd}>
        <div className="modal-content">
            <i className='close' onClick={onDestroy}>X</i>
            <h1>Видалити запис?</h1>
            <div className="btns">
            <button className='accept'>Так</button>
            <button className='reject' onClick={onDestroy}>Ні</button>
            </div>
        </div>
        </div>
  )
}

export default ModalWnd