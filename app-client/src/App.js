import React, {Component}  from 'react';
import logo from './logo.svg';
import Checkout from './checkout/Checkout';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to TW Protection</h1>
                </header>
                <p className="App-intro">
                    <Checkout
                        name={'TW Protection'}
                        description={'Checkout and server side testing'}
                        amount={1}
                    />
                </p>
            </div>
        );
    }
}

export default App;
