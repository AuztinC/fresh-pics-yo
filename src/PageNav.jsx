import React, {useRef, useEffect} from 'react'

export default function PageNav({ page, pages, setPage, category }) {
		
		
		const numRef = useRef();
		
		function nextPage() {
				if (page <= pages) {
						setPage(page+1);
						numRef.current.value = (page + 1);
				}
		}
		function prevPage() {
				if (page > 1) {
						setPage(page-1);
						numRef.current.value = (page - 1);
				}
		}
		function numPage(e) {
				let num = parseInt(e.target.value);
				if (num >= 1 && num <= pages) {
						setPage(num);
				}
		}
		
		
		// go to first page of new category
		useEffect(() => {
			numRef.current.value = 1;
		}, [category])
		
		
	return (
		<>
				<div id="page-inp-cont" style={{display:"flex", flexDirection: "row", marginTop: "10px"}}>
						<button className="page-btn" id="prev-page" onClick={prevPage} > - </button>
						<div id='page-lbl'> Page </div>
						<input id="page-selector" placeholder={1} ref={numRef} type="text" onChange={numPage} />
						<button className="page-btn" id="next-page" onClick={nextPage} > + </button>
				</div>
		</>
	)
}
