import React from 'react'
import PageNav from './PageNav'
import ColorPick from "./ColorPick";

export default function Header({ pages, page, category, setPage, setColor, setCategory }) {
  return (
	<>
		<div id='main-header'>
			
			<h1 className='logo'>FreshPics</h1>
			
			<div style={{display:"flex", flexDirection:"row"}}>
				<form onSubmit={(e)=>{
					e.preventDefault()
					setCategory( e.target[0].value )
					setPage(1)
				}}>
					<input id='input-box' type='text' placeholder={category}/>
				</form>
				<ColorPick setColor={setColor}/>
			</div>
			
			<PageNav page={page} pages={pages} setPage={setPage} category={category} setColor={setColor}/>
			
		</div>
	</>
  )
}
