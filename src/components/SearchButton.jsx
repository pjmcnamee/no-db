import React from 'react'

export default function SearchButton(props) {
  return (
	<div>
	  <button className="search-nav" onClick={() => props.compare(false)}>Browse Items</button>
	</div>
  )
}
