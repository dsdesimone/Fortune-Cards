import React from 'react'
import Button from "../Button/Button";
import './Card.css'

const Card = ({ phraseRamdom, changePhrase }) => {
  return (
    <>
      <Button changePhrase={changePhrase} />
      <div className="card__container" >
        <p className="card__phrase">{phraseRamdom.phrase}</p>
        <div className='card__detail'></div>
      </div>
    </>
  );
};

export default Card
