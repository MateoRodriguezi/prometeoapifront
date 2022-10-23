import React from 'react';
import './index.css';

function Login(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };
      
  return (
    <button 
        className="Login"
        onClick={onClickButton}
    >
        Login

    </button>
  );
}

export { Login };