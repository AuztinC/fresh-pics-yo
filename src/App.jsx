import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import RanImg from './RanImg.jsx';
import ImgOl from './ImgOl.jsx';
import Header from './Header.jsx'
// import image1 from "./img/pexels-tobi-675764.jpg"



// ADD LINK TO IMAGES UNDER OVERLAY IMAGE //

function App() {
	
	
	const [category, setCategory] = useState('boat');
	const [color, setColor] = useState();
	
	const [overlay, setOverlay] = useState(null)
	const [overlayStyle, setOverlayStyle] = useState({display:"none", pointerEvents: "none", transform: "scale(0%)"})
	
	// current page number
	const [page, setPage] = useState(1);
	// number of pages, used to determine max value for page number input
	const [pages, setPages] = useState();
	

	function sub(e) {
		if (e.key === "Enter") {
			setCategory(e.target.value)
			setPage(1)
			
		}
	}
	
	function handleOverlay() {
		setOverlayStyle({display:"flex", pointerEvents: "all", transform: "scale(100%)"})
		return (<ImgOl overlay={overlay} />)
	}
	function hideOverlay() {
		setOverlay(null);
		setOverlayStyle({display:"none", pointerEvents: "none", transform: "scale(0%)"})
		return (<ImgOl overlay={overlay} />)
	}
	// function handlePage(e) {
	// 	let pg = e.target.value
	// 	setPage(pg)
	// }
	
	
	// useEffect(() => {
		
		
	// }, [page])
	
	useEffect(() => {
		if (overlay) {
			handleOverlay()
			
		}
	}, [overlay])
	
	
	return (
		
		
		<div className="App">
			<Header category={category} pages={pages} page={page} sub={sub} setPage={setPage} setColor={setColor}/>
			
			<div id="image-container">
				<RanImg cat={category} handleOverlay={setOverlay} color={color} p={page} setPs={setPages}/>
				<div id="settings-cont"></div>
				<ImgOl styles={overlayStyle} overlay={overlay} hide={hideOverlay}/>
			</div>
			
		</div>
	);
}

export default App;
