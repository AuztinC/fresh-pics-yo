import React, { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from "uuid";



export default function RanImg({cat, handleOverlay, p, setPs, color }) {
	
	const API_KEY = '35904460-6da0f483724d8177c3f681e67';
	
	
	
	const [imgs, setImgs] = useState([]);
	
	const URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(cat)+"&page=" + encodeURIComponent(p)+"&colors=" + encodeURIComponent(color);
	
	useEffect(() => {
		fetch(URL)
		.then(response => response.json())
		.then(data => {
			
			setImgs(data.hits);
			setPs(Math.ceil(data.totalHits/20));
			// let hits = data.totalHits;
		})
	}, [cat, p, color])
	
	
	return (
		<>
			{imgs.map((img) => {
				// let url = "";
				return <img className="img-item" key={img.id} src={img.previewURL} onClick={() => {handleOverlay(img)}}/>
			})}
		</>
  )
}
