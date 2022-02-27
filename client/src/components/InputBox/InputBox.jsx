import React from 'react'

import './InputBox.css'

const InputBox = ({ handleNewMessage }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewMessage(e.target.children[0].value);
        e.target.reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input className='input-box' type="text" placeholder="Enter your message" onSubmit={handleSubmit}/>
            </form>
        </div>
    );
}

export default InputBox
