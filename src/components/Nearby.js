import {  useParams, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../assets/styles/App.scss';
import List from './List';

const Nearby = () => {

		let {coords} = useParams();
		let {ident} = useParams();	//primer icao
		const history = useHistory();

		const goBack = () => {
			history.goBack();
		}

    return(
			<div className='main'>
				<div className='nav flex-row'>
					<button onClick={e => goBack()} className='material-icon left' >
						<ArrowBackIcon className='material-icon' />
					</button>   
					<h2 className='material-icon medium'>Nearby Airports</h2>
					<ArrowBackIcon className='right invisible' />
				</div>
				<div className="home overflow-scroll">
					<div>
						<List coords={coords} ident={ident} />
					</div>
				</div> 
			</div> 
    );
}

export default Nearby;