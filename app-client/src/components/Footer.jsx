import React from 'react';
import nodeExpress from '../assets/node-express.png';
import react from '../assets/react.svg';
import gcloud from '../assets/gcloud.gif';
import arduino from '../assets/arduino.gif';
import {getCurrentYear} from "../utils/datetime";

const iconStyle = {
    height: 60
};

/**
 * Footer component.
 */
const Footer = () => {
    return (
        <div>
            <hr/>
            <footer>
                <div className="text-center lead">STACK | <img style={iconStyle} src={nodeExpress} alt="ReactJS"/> | <img className="react-logo" src={react} alt="ReactJS"/> | <img style={iconStyle} src={gcloud} alt="Google Cloud Speech"/> | <img style={iconStyle} src={arduino} alt="Arduino 101"/></div>
                <div className="text-center mt-2">&copy; Copyright {getCurrentYear()}, {'MediFind™'}</div>
            </footer>
        </div>
    );
};

export default Footer;
