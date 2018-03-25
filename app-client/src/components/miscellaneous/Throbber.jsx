import React from 'react';
import throbber from '../../assets/icon.png';
import {detect} from 'detect-browser';
import './styles.css';

/**
 * A throbber that adapts to the browser type for the correct display.
 * Browsers from Microsoft, i.e. Edge/ IE do not support svg animations
 * and we have to fallback to a gif instead.
 */
const Throbber = () => {
    const browser = detect();
    switch (browser && browser.name) {
        case 'chrome':
        case 'firefox':
        case 'opera':
        case 'safari':
            // We use CSS animations for TWP's throbber so there's no need to swap between browser types.
            return <img className="throbber" src={throbber} alt="Loading..."/>;
        default:
            return <img className="throbber" src={throbber} alt="Loading..."/>;
    }
};

export default Throbber;
