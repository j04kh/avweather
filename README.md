<h1 align="center">AvWeather</h1>

## About the project

Aeronautical Weather application built using React and SASS. Search airports by ICAO code and get METAR (METeorological Aerodrome Report), TAF (Terminal Aerodrome Forecasts) and the aiport information.
This app uses: an API from [AVWX](https://avwx.docs.apiary.io) to fetch the data (METAR, TAF and Airport info) and the Google Maps API to display the airport location on Maps.

If you are not familiar with ICAO codes, you can google the ICAO code of your local Aiport, or try with some examples: `KLAX` (Los Angeles Intl), `KMIA` (Miami intl). 
Keep in mind that not all airports reports METAR or TAF. If you search for an aiport that is not reporting, you will see an error message on the homepage of the app.

## Overview

![home](src/assets/images/screenshots/home.png?raw=true)
![details](src/assets/images/screenshots/details.png?raw=true)
![nearby](src/assets/images/screenshots/nearby.png?raw=true)
![map](src/assets/images/screenshots/map.png?raw=true)

### Built With

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)

## Features

Search airports by ICAO code, you can check METAR, TAF and Aiport info. 
You can view the airport location on Maps by taping on the upper right maps icon.
You can see a list of nearby airports taping on the button 'Nearby Airports'.

## How To Use
To clone and run this application locally, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/j04kh/avweather

# Install dependencies
$ npm install

# Run the app
$ npm start
```
