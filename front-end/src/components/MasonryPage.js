import {BoardPin} from "./BoardPin";
import React, {useEffect, useState} from 'react';
import {Masonry} from 'masonic'
import "./MasonryPage.css"

export const MasonryPage = () => {
    const [pins, setPins] = useState();

    const getData = () => {
    const path = `http://localhost:80/api/pins`
  
    fetch(path)
        .then(response => response.json())
        .then(pinsFromResponse => {
          setPins(pinsFromResponse);
        });
    }   

    useEffect(() => {
        getData()
    }, []);
      
    const PinCard = ({index, data, width}) => (
        <BoardPin {...data} />
    )

    return(
        <div className="masonic">
          {pins && <Masonry items={pins}
          columnGutter={20}
          columnWidth={250}
          overscanBy={2}
          render={PinCard} />}      
        </div>
    )
}