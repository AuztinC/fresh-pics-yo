import React from 'react'
// import RanImg from './RanImg.jsx'


export default function ImgOl({ overlay, styles, hide }) {
	
	// const [bigImg, setBigImg] = useState([])
	// useEffect(() => {

	// 	console.log(overlay);
	// 	// return (<ImgOl overlay={overlay} />)
	// 	}, [overlay])
	if (overlay) {
		return (
		<div id='img-overlay' style={styles} onClick={hide} >
			<img src={overlay.largeImageURL} alt=""/> 
		</div>
		)
	}
	
}
