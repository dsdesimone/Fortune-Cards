import React, { useState } from "react";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import phrasesArray from "./assets/universe.json";
import imgArray from "../public/img/imagen.json";
import { getRandomNumber } from "./utils/getRandomNumber";
import "./App.css";
 
function App() {
  /*Frases */
  const [phraseStart, setPhrase] = useState(
    getRandomNumber(0, phrasesArray.length - 1)
  );
  /*Imagenes y Estilos */
  const [imgStart, setImg] = useState(getRandomNumber(0, imgArray.length - 1));

  const handleClick = () => {
    setImg(getRandomNumber(0, imgArray.length - 1));
    setPhrase(getRandomNumber(0, phrasesArray.length - 1));
  };
  const imgStyle = {
    backgroundImage: imgArray[imgStart].img,
  };


  return (
    <section className="app" style={imgStyle}>
      <h1 className="title">Galletas de la <br />Fortuna</h1>
      <Card
        phraseRamdom={phrasesArray[phraseStart]}
        changePhrase={handleClick}
      />
      <Footer
        phraseRamdom={phrasesArray[phraseStart]}
      />
    </section>
  );
}
export default App;
