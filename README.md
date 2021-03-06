<h1 align="center">AvWeather</h1>

## About the project

Aeronautical Weather application built using React. Search airports by ICAO code and get METAR (METeorological Aerodrome Report), TAF (Terminal Aerodrome Forecasts) and the airport information.
This app uses: a REST API from [AVWX](https://avwx.rest/) to fetch the data (METAR, TAF and Airport info) and the Google Maps API to display the airport location on Maps.

If you are not familiar with ICAO codes, you can google the ICAO code of your local Airport, or try with some examples:

- `KLAX` (Los Angeles Intl)
- `KMIA` (Miami Intl)
- `SUMU` (Carrasco Airport Montevideo)
- `SABE` (Aeroparque Jorge Newbery - Buenos Aires)

Keep in mind that not all airports reports METAR or TAF. If you search for an airport that does not report the information, you will see an error message on the homepage of the app.

## Overview

![home](src/assets/images/screenshots/home.png?raw=true)
![details](src/assets/images/screenshots/details.png?raw=true)
![nearby](src/assets/images/screenshots/nearby.png?raw=true)
![map](src/assets/images/screenshots/map.png?raw=true)

### Built With

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Material-UI Icons](https://material-ui.com/components/material-icons/)

## Features

- Search airports by ICAO code, check METAR, TAF and Airport info.
- View the airport location on Maps by taping on the upper right maps icon.
- See a list of nearby airports tapping on the button 'Find Nearby'.

## How To Use

You can view a live demo [here](https://j04kh.github.io/avweather/).
To clone and run this application locally, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

#### Environment variables

Create your `.env` file at the root of the project and set the following variables:

`REACT_APP_TOKEN` AVWX token </br>
`REACT_APP_MAPS_KEY` Google Maps Api key

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/j04kh/avweather

# Install dependencies
$ npm install

# Run the app
$ npm start
```
