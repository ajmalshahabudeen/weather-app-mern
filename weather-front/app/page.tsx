"use client"
import React from "react"

const HomePage = () => {
	return (
		<div className='flex flex-col min-h-screen justify-center items-center gap-5'>
			<p className='text-2xl'>HomePage</p>
			<br />
			<button
				className='text-2xl bg-blue-300 text-black p-3 hover:bg-blue-400 rounded-2xl'
				onClick={() => (window.location.href = "/current")}>
				Go to Current Weather
			</button>
			<button
				className='text-2xl bg-blue-300 text-black p-3 hover:bg-blue-400 rounded-2xl'
				onClick={() => (window.location.href = "/history")}>
				Go to History Weather
			</button>
		</div>
	)
}

export default HomePage
