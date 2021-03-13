import '../assets/styles/App.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MapIcon from '@material-ui/icons/Map';
import { useParams, useHistory } from 'react-router-dom';


const ShowInMaps = (props) => {

	let {coords} = useParams();
	let history = useHistory();
	const mapsKey = `${process.env.REACT_APP_MAPS_KEY}`;
	const mapUrl = `https://www.google.com/maps/embed/v1/view?
										center=${coords}&
										zoom=13&
										key=${mapsKey}&
										maptype=satellite`

	const goBack = () => {
		history.goBack();
	}

	return(
		<div className='main'>
			<div className='nav flex-row'>
				<button onClick={e => goBack()} className='material-icon left'>
					<ArrowBackIcon className='material-icon' />
				</button>   
				<h2 className='material-icon medium'>Location</h2>
				<MapIcon className='invisible right' />
			</div>
			<div className="home">
				<div className='home  items-center'>
					<iframe className='map' 
					title='maps'
					src={mapUrl} 
					/>
				</div>
			</div>
		</div>	
	);
}


export default ShowInMaps;
