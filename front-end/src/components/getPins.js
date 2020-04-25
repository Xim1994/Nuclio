import React, {useEffect, useState} from 'react';
import {BoardPin} from "./BoardPin";
import './getPins.css'

const pageSizes = [5,10,20];
const GetPins = () => {

  const [pins, setPins] = useState();

  const getData = (size) => {
    const path = `http://localhost:80/api/pins`

    fetch(path)
      .then(response => response.json())
      .then(pinsFromResponse => {
        setPins(pinsFromResponse);
      });
  }

  useEffect(() => {
    getData()
  }, []); // runs on component mount, at the beginning

  return (
    <div>
      {pageSizes.map(size => <button onClick={() => {getData(size)}}>page {size}</button>)}
      <div className="images">
        {pins && pins.map(pin => <BoardPin {...pin} /> )}
      </div>
    </div>
  );
}

export default GetPins;