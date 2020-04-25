import { MasonryLayout } from './Masonry';
import {BoardPin} from "./BoardPin";
import React, {useEffect, useState} from 'react';

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

    console.log([...Array(12).keys()])

    useEffect(() => {
        getData()
      }, []); // runs on component mount, at the beginning    

    return(
        <MasonryLayout columns={4} gap={20}>
        {           
            pins && pins.map(pin => {
                const height = 500 + Math.ceil(Math.random() * 100);
            
                return (
                    <div style={{height: `${height}px`}}> <BoardPin {...pin} />  </div>
                    )
                })
        }
        </MasonryLayout>
    )
}