import React from 'react'
import './Button.css'

const Button = ({ changePhrase }) => {
  return (
    <button onClick={changePhrase} className="button">
      Probar mi suerte
    </button>
  );
}

export default Button
