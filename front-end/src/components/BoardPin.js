import React, {useState} from 'react';
import './BoardPin.css'
import { BrowserRouter as Route, Link } from 'react-router-dom';

export const BoardPin = pin => {

    const [show, setShow] = useState(false);

    function showButton() {
        setShow(true)
    }

    function hideButton() {
        setShow(false)
    }
    
    return (
        <div className="container">
            <Link to={"/get/pins/" + pin.id}>
                <img onMouseOver={showButton} onMouseOut={hideButton} className="BoardPin-image" src={pin.image_url}/>
                {show ? <span className="btn">Info</span> : ''}
            </Link>
        </div>
    )
}