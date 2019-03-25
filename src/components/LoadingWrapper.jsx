import React from 'react'

export default ({children, loading})  => (
	loading ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : children
)
