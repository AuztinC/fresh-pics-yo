import React, { useRef } from 'react'


export default function ColorPick ({ setColor }) {
	
	const colorRef = useRef()
	
	
	function handleColor() {
		
		setColor(colorRef.current.value);
		// console.log(colorRef.current.value)
		
	}
	
  return (
	<>
		<select ref={colorRef} onInput={handleColor} id="color-dropdown" style={{height:"50%", marginTop:"10%", marginLeft:"10px"}}>
			<option className="color-option" style={{color:"black", backgroundColor:"white"}} value="null">All</option>
			<option className="color-option" style={{color:"white", backgroundColor:"red"}} value="red">Red</option>
			<option className="color-option" style={{color:"white", backgroundColor:"orange"}} value="orange">Orange</option>
			<option className="color-option" style={{color:"black", backgroundColor:"yellow"}} value="yellow">Yellow</option>
			<option className="color-option" style={{color:"white", backgroundColor:"green"}} value="green">Green</option>
			<option className="color-option" style={{color:"white", backgroundColor:"Turquoise"}} value="turquoise">Turquoise</option>
			<option className="color-option" style={{color:"white", backgroundColor:"blue"}} value="blue">Blue</option>
			<option className="color-option" style={{color:"black", backgroundColor:"#c8a2c8"}} value="lilac">Lilac</option>
			<option className="color-option" style={{color:"white", backgroundColor:"pink"}} value="pink">Pink</option>
			<option className="color-option" style={{color:"black", backgroundColor:"white"}} value="white">White</option>
			<option className="color-option" style={{color:"white", backgroundColor:"gray"}} value="gray">Gray</option>
			<option className="color-option" style={{color:"white", backgroundColor:"black"}} value="black">Black</option>
			<option className="color-option" style={{color:"white", backgroundColor:"brown"}} value="brown">Brown</option>
			<option className="color-option" style={{color:"black", backgroundColor:"grey"}} value="grayscale">Grayscale</option>
			<option className="color-option" style={{color:"black", backgroundColor:"white"}} value="transparent">Transparent</option>
		</select>
	</>
  )
}
