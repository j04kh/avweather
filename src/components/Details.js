import { useState, useEffect} from 'react';
import '../assets/styles/App.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MapIcon from '@material-ui/icons/Map';
import { useParams, useHistory } from 'react-router-dom';


const Details = () => {

	let {ident} = useParams();
	const stationUrl = `https://avwx.rest/api/station/${ident}?&format=json`;
	const metarUrl = `https://avwx.rest/api/metar/${ident}?&format=json`;
	const tafUrl = `https://avwx.rest/api/taf/${ident}?&format=json`;
	const token = `${process.env.REACT_APP_TOKEN}`;

	const [stationData, setStationData] = useState({});
	const [metarData, setMetarData] = useState({});
	const [tafData, setTafData] = useState({});
	const [condition, setCondition] = useState('vmc');
	const [loading, setLoading] = useState({metar:true, taf:true, info:true});

	let history = useHistory();

	const getStationData = async () => {
		await fetch(stationUrl, {
  		headers: {
    		Authorization: `TOKEN ${token}`
  		}
		})
  	.then(res => res.json())
  	.then(
			json => {
				const newStationData = {
					iata: json.iata,
					icao: json.icao,
					lat: json.latitude,
					lon: json.longitude,
					name: json.name,
					country: json.country,
					runways: json.runways,
					elev_ft: json.elevation_ft,
					elev_m: json.elevation_m
				};
				setStationData(newStationData);
			})
			.catch(error => console.log('Station fetch error: ' + error));
	};

	const getMetarData = async () => {
		await fetch(metarUrl, {
  		headers: {
    		Authorization: `TOKEN ${token}`
  		}
		})
  	.then(res => res.json())
  	.then(
			json => {
				json.flight_rules.includes('IFR') ? setCondition('imc') : setCondition('vmc');
				const sincePublished = timeSincePublished(json);
				const newMetarData = {
					raw: json.raw,
					flight_rules: json.flight_rules,
					wind_direction: json.wind_direction.value,
					wind_speed: json.wind_speed.value,
					since: sincePublished
				};
				setMetarData(newMetarData);
				setLoading(false);
			})
			.catch(error => console.log('METAR fetch error: ' + error));
	};

	const getTafData = async () => {
		await fetch(tafUrl, {
  		headers: {
    		Authorization: `TOKEN ${token}`
  		}
		})
  	.then(res => res.json())
  	.then(
			json => {
				const newTafData = {
					raw: json.raw
				};
				setTafData(newTafData);
			})
			.catch(error => console.log('TAF fetch error: ' + error));
	};

	const getRunwaysList = () => {
		const listRwys = stationData.runways.map((rwy) => {
			return(
				<span className='text small left data-font runway'>{rwy.ident1}/{rwy.ident2}</span>
			);
		});
		return(
			<>
				<p className='text left small'><span className='bold'>Runways: </span> {" " + stationData.runways.length}</p>
				<p className='text left small'>{listRwys}</p>
			</>
		);
	};

	const roundCoord = (coord) => {
		let res = coord;
		res = Math.floor(res * 100) / 100;
		return (res.toFixed(2)); 
	}

	//Aux function
	const timeSince = (date) => {

		var seconds = Math.floor((new Date() - date) / 1000);
		var interval = seconds / 31536000;
	
		if (interval > 1) {
			return Math.floor(interval) + " years";
		}
		interval = seconds / 2592000;
		if (interval > 1) {
			return Math.floor(interval) + " months";
		}
		interval = seconds / 86400;
		if (interval > 1) {
			return Math.floor(interval) + " days";
		}
		interval = seconds / 3600;
		if (interval > 1) {
			return Math.floor(interval) + " hours";
		}
		interval = seconds / 60;
		if (interval > 1) {
			return Math.floor(interval) + " minutes";
		}
		return Math.floor(seconds) + " seconds";
	}


	const timeSincePublished = (data) => {
		var offset = new Date().getTimezoneOffset();	//Offset in minutes ex: 180min = +3hs 
		const now = new Date();
		const toLocal = parseInt(offset/60);
		const daypublished = parseInt(data.raw.slice(5,7));
		let publishedHr = (parseInt(data.raw.slice(7,9))-toLocal);
		if (publishedHr < 0){
			publishedHr = publishedHr%12;
		}
		const publishedMin = parseInt(data.raw.slice(9,11));
		const published = new Date(now.getFullYear(), now.getMonth(), daypublished, publishedHr, publishedMin, 0, 0);

		const res = timeSince(published);
		
		if (res.includes('minutes')){
			return (`${res} ago`);
		} else {
			return 'expired';
		}
	}

	const findNearby = () => {
		const coords = roundCoord(stationData.lat) + "," + roundCoord(stationData.lon);
		history.push(`/nearby/${coords}/${stationData.icao}`);
	}

	const seeOnMap = () => {
		const coords = roundCoord(stationData.lat) + "," + roundCoord(stationData.lon);
		history.push(`/location/${coords}/${stationData.icao}`);
	}
	
	const windInfo = () => {
		const direction = metarData.wind_direction === null ? 'variable' : `${metarData.wind_direction}º`
		const speed = metarData.wind_speed === 0 ? 'Wind calm' : `${metarData.wind_speed} kts `;
		
		if (speed === 'Wind calm'){
			return speed;
		}
		else{
			return speed + direction;
		}
	}

	const showConditions = () => {
		if (metarData.flight_rules.includes('VFR')){
			return 'VMC';
		}
		else {
			return 'IMC';
		}
	}

	useEffect(() => getMetarData(), []); // eslint-disable-line react-hooks/exhaustive-deps
	useEffect(() => getStationData(), []); // eslint-disable-line react-hooks/exhaustive-deps
	useEffect(() => getTafData(), []); // eslint-disable-line react-hooks/exhaustive-deps


	if (loading){
		return(
			<div className='main'>
				<div className='home justify-center items-center small'>
					<h1>Loading...</h1>
				</div>
			</div>
		)
	}
	else{
		return(
			<div className='main'>
				<div className='nav flex-row'>
					<button onClick={e => history.goBack()} className='material-icon left'>
						<ArrowBackIcon className='material-icon' />
					</button>   
					<h2 className='material-icon'>{stationData.iata? stationData.iata + "/" + stationData.icao : stationData.icao}</h2>
					<button onClick={e => seeOnMap()}>
						<MapIcon className='material-icon right' />
					</button>
				</div>
			<div className="home">
				<div>
					<p className='text'>{stationData.name}</p>
					<p className='text'>{stationData.country}</p>
				</div>
				<div className='container self-center overflow-scroll flex-col' >	{/* container METAR */}
					<div className='flex-row right' >
						<p className='text bold'>METAR</p>
						<div className='flex-row'>
							<p className='text'> {windInfo()}</p>
							<p className={`text condition ${condition}`}>{showConditions()}</p>
						</div>
					</div> 

					<p className='text right data-font'>
						{metarData.raw}
					</p>
					<div className='flex-row justify-end right'>
						<p className={`time-ago bottom ${metarData.since}`}>{metarData.since}</p>
					</div>
				</div>	
				
				<div className='container big self-center overflow-scroll' >	{/* container TAF */}
					<div className='flex-row right' >
						<p className='text bold'>TAF</p>
					</div> 
					<div className='text right data-font'>
						{tafData.raw}
					</div>
				</div>

				<div className='container big self-center'> {/* airport info */}
					<div className='flex-row right' >
						<p className='text bold'>Airport Info</p>
					</div> 
					<div className='flex-col'>
						<p className='text left small'><span className='bold'>Coordinates: </span><span className='text small left data-font'> {roundCoord(stationData.lat)} {roundCoord(stationData.lon)}</span> </p>
						<p className='text left small'><span className='bold'>Elevation: </span> <span className='text small left data-font'> {stationData.elev_ft}ft / {stationData.elev_m}m</span> </p>
						{stationData.runways && getRunwaysList()}
					</div>
				</div>
				<button className='nearby button small' onClick={e => findNearby(e)}>
					<p>FIND NEARBY</p>
				</button>
			</div>
		</div>
	);
	}
	
};

export default Details;