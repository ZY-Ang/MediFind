# MediFind
Your Pharmacist Assistant

## Problem
Pharmacists have a tough time finding the right location where medicine. Our speech to location platform aims to assist them in finding the right location quickly, easily and as user-friendly as possible.

## Solution
We first created a front end for our users to interact with the interface. We wanted our interface to be as user friendly as possible so we created only two controls, a speech-dictator and a manual text input field.

![client_platform](https://raw.githubusercontent.com/ZY-Ang/MediFind/master/screenshot.png)

The client application outputs the found medicine, and it's location, which is great.

But, in order for pharmacists to actually find the medicine easily, we need to light the actual location up, which is where our hardware tech comes in.

![arduino](https://raw.githubusercontent.com/ZY-Ang/MediFind/master/arduino_screenshot.jpg)

We built a quick proof of concept prototype of a typical medicine cabinet (with trays) and added a json database to manage the medicine locations. When the voice commands match the medicines, the location automatically lights up and the pharmacist can easily find where the medicine is.

## Stack
The following frameworks and technologies were used for this project:
- `arduino` (101) as a simple location indicator, along with some LEDs
- `NodeJS+express` server to communicate with the arduino through the COM port
- `ReactJS` on the front end for a user to get a nice user interface
- `Google Cloud Platform`'s (Speech) API on `npm` to create speech-to-text component for the project

## Note
This project is meant as a submission for HackNYU 2018 healthcare/assistive technology track.

### Installation
1. Load arduino_code onto your arduino and the necessary components to the appropriate ports.
2. Install nodejs and run `node index.js` from the `api-server` directory.
3. Run `npm start` from the `app-client` directory to run the React front end application.
