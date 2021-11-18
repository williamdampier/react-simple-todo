import React, {useState} from 'react';
import './Modal.css';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <React.Fragment>
            <button onClick={()=>setIsOpen(true)}>Open Modal</button>
        {isOpen && (
            <div className="modal">
                <div className="modal-body">
                    <h1>Modal Title</h1>
                    <p>I am Modal window</p>
                    <button onClick={()=>setIsOpen(false)}>Close Modal</button>
                </div>
            </div>
        )}
          
          
         
        </React.Fragment>
    );
};

export default Modal;