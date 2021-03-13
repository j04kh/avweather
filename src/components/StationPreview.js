import '../assets/styles/App.scss';


const StationPreview = (props) => {

	const roundDistance = (d) => {
		let res = d;
		res = Math.floor(res * 100) / 100;
		return (res.toFixed(0)); 
	}

	return(
		<div className='container self-center container-preview left' >
			<div className='flex-row right' >
				<p className='text'>{props.name + " " + props.country}</p>
				<p className='text bold'>{props.icao}</p>
			</div>
			<div className=''>
				<p className='text'>{roundDistance(props.dist) + " Nm from " + props.from}</p>
			</div>
		</div>
	);
};

export default StationPreview;