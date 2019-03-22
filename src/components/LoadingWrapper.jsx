import React from 'react'

export default ({children, loading})  => (
	loading ? <h1>Loading</h1> : children
)
