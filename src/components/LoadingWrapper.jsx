import React from 'react'

export default ({children, loading})  => (
	loading ? <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : children
)
