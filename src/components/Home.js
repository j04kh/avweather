import { useState } from 'react';
import '../assets/styles/App.scss';
import Logo from '../assets/images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';


const Home = () => {

	const [search, setSearch] = useState('');
	const [resStatus, setResStatus] = useState('OK');
	let history = useHistory();
	
	const URL = `https://avwx.rest/api/station/${search}?&format=json`;
	const token = `${process.env.REACT_APP_TOKEN}`;

	const searchStation = (e) => {
		e.preventDefault();
		setSearch('');
		fetch(URL, {
  		headers: {
    		Authorization: `TOKEN ${token}`
  		}
		})
  	.then(
			res => res.ok ? history.push(`/station/${search}`) : errorHandler());
	}

	//Shows error message if airport not found
	const errorHandler = () => {
    setResStatus('ERROR');
    setTimeout(() => {
      setResStatus('OK');
    }, 2200);
	}

	return(
		<div className='main'>
		<div className="home justify-center items-center">
			<img src={Logo} alt='logo' />
			<h1>AvWeather</h1>
			<form className='search ' onChange={e => setSearch(e.target.value)} onSubmit={e => searchStation(e)}>
				<input type='text' placeholder='Airport ICAO code...' value={search} />
				<button className='material-icon' type='submit'>
					<SearchIcon className='material-icon primary'/>
				</button>
			</form>
			<p className={`error-${resStatus}`}>Error: Airport not found</p>
		</div>
		</div>
	);
}

export default Home;