import React from 'react'
import PageNav from './PageNav'
import ColorPick from "./ColorPick";

export default function Header({ pages, page, category, sub, setPage, setColor }) {
  return (
	<>
		<div id='main-header'>
			<h1 className='logo'>FreshPics</h1>
			<input id='input-box' type='text' onKeyDown={ (e) => {sub(e)}} placeholder={category}/>
			
			<div style={{display:"flex", flexDirection:"row"}}>
				<PageNav page={page} pages={pages} setPage={setPage} category={category} setColor={setColor}/>
				
				<ColorPick setColor={setColor}/>
			</div>
		</div>
	</>
  )
}
