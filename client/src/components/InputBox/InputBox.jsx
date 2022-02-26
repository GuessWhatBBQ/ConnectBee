import React from 'react'

const InputBox = ({ handleNewMessage }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewMessage(e.target.children[0].value);
        e.target.reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Enter your message" onSubmit={handleSubmit}/>
            </form>
        </div>
    );
}

export default InputBox
