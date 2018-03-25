import React, {Component} from 'react';
import axios from 'axios';
import Throbber from "./miscellaneous/Throbber";
import {byPropKey} from "./utils";
import {levenshteinDistance} from "../utils/string";
import withSpeechRecognition from 'react-speech-recognition';

const database = {
    panadol: 1,
    painkiller: 1,
    antibiotics: 2,
    aspirin: 3,
    paracetemol: 4
};

class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            autoText: "",
            manualText: "",
            isRecording: false,
            test: "",
            notFoundTimeout: null
        };
    }

    onSubmit = (event) => {
        const tryMedicine = this.state.manualText.trim();
        const tryGetByKey = database[tryMedicine];
        if (tryGetByKey) {
            axios.post("http://localhost:8080/", {value: tryGetByKey.toString(), medicine: tryMedicine})
                .then(({data}) => {
                    this.setState(byPropKey('test', data.value));
                    this.setState(byPropKey('manualText', ""));
                })
                .catch(err => {
                    this.setState(byPropKey('test', err.message));
                    this.setState(byPropKey('manualText', ""));
                });
        } else {
            let dataArray = Object.keys(database);
            dataArray = dataArray.map(medicine => ({
                medicine: medicine,
                value: database[medicine],
                distance: levenshteinDistance(tryMedicine, medicine)
            })).sort((a, b) => (a.distance - b.distance));
            if (dataArray[0].distance < 4) {
                axios.post("http://localhost:8080/", {value: dataArray[0].value.toString(), medicine: dataArray[0].medicine})
                    .then(({data}) => {
                        this.setState(byPropKey('test', data.value));
                        this.setState(byPropKey('manualText', ""));
                    })
                    .catch(err => {
                        this.setState(byPropKey('test', err.message));
                        this.setState(byPropKey('manualText', ""));
                    });
            } else {
                this.setState(byPropKey('test', "Sorry, we are unable to find a match for " + this.state.manualText));
                this.setState(byPropKey('manualText', ""));
            }
        }
        event.preventDefault();
    };

    componentWillReceiveProps(nextProps) {
        let nextWords = nextProps.transcript.split(' ');
        if (!this.state.isRecording) {
            if (nextWords.length > 1 &&
                levenshteinDistance(nextWords[nextWords.length - 1], "Google") < 1 &&
                levenshteinDistance(nextWords[nextWords.length - 2], "hey") < 1) {
                this.onRecord();
            }
        } else {
            nextWords.map(word => {
                let dataArray = Object.keys(database).map(medicine => ({
                    medicine: medicine,
                    value: database[medicine],
                    distance: levenshteinDistance(word, medicine)
                })).sort((a, b) => (a.distance - b.distance));
                if (dataArray[0].distance < 2) {
                    this.onRecordingFound(dataArray[0].value, dataArray[0].medicine);
                }
            });
        }
        this.setState(byPropKey('autoText', nextProps.transcript));
    }

    onRecord = (event) => {
        this.setState(byPropKey('isRecording', true));
        // start listening
        // this.props.startListening();
        this.setState(byPropKey('notFoundTimeout',
            setTimeout(() => {
                this.props.resetTranscript();
                // this.props.stopListening();
                this.setState(byPropKey('isRecording', false));
                this.setState(byPropKey('autoText', ""));
                this.setState(byPropKey('test', "Sorry, we are unable to find a match!"));
            }, 10000)
        ));
        if (event) {
            event.preventDefault();
        }
    };

    onRecordingFound = (trayNum, medicine) => {
        axios.post("http://localhost:8080/", {value: trayNum.toString(), medicine: medicine})
            .then(({data}) => {
                this.setState(byPropKey('test', data.value));
                this.props.resetTranscript();
                // this.props.stopListening();
                this.setState(byPropKey('autoText', ""));
                clearTimeout(this.state.notFoundTimeout);
                this.setState(byPropKey('isRecording', false));
            })
            .catch(err => {
                this.props.resetTranscript();
                // this.props.stopListening();
                this.setState(byPropKey('test', err.message));
                this.setState(byPropKey('autoText', ""));
                clearTimeout(this.state.notFoundTimeout);
                this.setState(byPropKey('isRecording', false));
            });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Throbber/>
                    <h1 className="App-title display-4 mt-2">medif<i className="small fas fa-search-plus"/>nd</h1>
                    <p className="lead">Your Pharmacist Assistant</p>
                </header>
                <div className="container mt-4">
                    <button
                        className="btn btn-outline-dark"
                        style={{border: 'none', height: 150, width: 150, borderRadius: "50%"}}
                        onClick={this.onRecord}
                        disabled={this.state.isRecording || !this.props.browserSupportsSpeechRecognition}
                    >
                        {
                            this.state.isRecording
                                ? <div><i className="fas fa-microphone-slash display-4"/></div>
                                : <div><i className="fas fa-microphone display-4"/></div>
                        }
                        <div className="mt-1">{this.state.isRecording ? "Recording..." : "Start Recording"}</div>
                    </button>
                    <p>{this.state.autoText}</p>
                    <form onSubmit={this.onSubmit} className="text-center">
                        <input
                            className="form-control text-center mt-4"
                            value={this.state.manualText}
                            onChange={event => {this.setState(byPropKey('manualText', event.target.value))}}
                            placeholder="Search for medicine"
                            disabled={this.state.isRecording}
                        />
                        <button
                            className="btn btn-outline-success mt-2"
                            onClick={this.onSubmit}
                            type="submit"
                            disabled={this.state.isRecording}
                        >
                            Search
                        </button>
                    </form>
                </div>
                <p className="font-weight-bold mt-2">{this.state.test}</p>
            </div>
        );
    }
}

export default withSpeechRecognition(LandingPage);
