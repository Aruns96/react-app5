import React from 'react';
import ReactDom from 'react-dom'
import "./Modal.css"


const Backdrop = (props) =>{
    return <div className='backdrop' onClick={props.onClose}/>
}

const ModalOverlay = (props) =>{
    return <div className='modal'>
        <div className='content'>
            {props.children}
        </div>
    </div>
}

const Modal = (props) => {
    
  return (
   <>
   {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>,document.getElementById("overlay"))}
   {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById("overlay"))}
   </>
  )
}

export default Modal