import React, {useEffect, useState} from 'react';
import {BoardPin} from "./BoardPin";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import './getOnePin.css'

const GetOnePin = (props) => {

  const [pin, setPin] = useState();

  useEffect(function() {
    const path = `http://localhost:80/api/pins/${props.match.params.id}`

    fetch(path).then(response => response.json())
    .then(pinsFromResponse => {
      setPin(pinsFromResponse);
    })
    .catch(function (error) {
        console.log(error);
    })
  }, []);

  return (
    <div className="single">
      {pin && <BoardPin {...pin} />}
      <label>Author: </label>
      {pin && pin.author}
      <br/>
      <label>Descripcion: </label>
      {pin && pin.description}
      <br/>
      <label>Date: </label>
      {pin && pin.date}
      <div>
        <Link to={'/get/pins'}>Go Back</Link>
      </div>
    </div>
  );
}

export default GetOnePin;