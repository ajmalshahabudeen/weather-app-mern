"use client"
import { getCurrent } from "@/lib/current"
import React from "react"

const CurrentPage = () => {
	const [city, setCity] = React.useState("")
	const [weather, setWeather] = React.useState<any>([])
	const [loading, setLoading] = React.useState(false)
	const [enterCity, setEnterCity] = React.useState(false)

	const get_current = async () => {
		setLoading(true)
		if (!city) {
			setEnterCity(true)
			setLoading(false)
			return
		}
		const res = await getCurrent(city).then((res) => {
			setEnterCity(false)
			setWeather(res)
			setLoading(false)
		})
		console.log(res)
	}

	return (
		<div className='flex flex-col min-h-screen justify-center items-center gap-5'>
			<p className='text-2xl'>Get a City Current Weather</p>
			<br />
			<div className='flex gap-5'>
				<input
					className='text-black text-2xl px-5 rounded-2xl'
					type='text'
					placeholder='City Name'
					onChange={(e) => setCity(e.target.value)}
					value={city}
				/>
				<button
					disabled={loading}
					className='text-2xl bg-blue-300 text-black p-3 hover:bg-blue-400 rounded-2xl'
					onClick={get_current}>
					{loading ? "Loading..." : "Get"}
				</button>
			</div>
			{enterCity && (
				<p className='text-2xl text-center'>Please enter a city</p>
			)}

			{weather.response && <div className='container mx-auto p-4'>
				<h1 className='text-2xl font-bold mb-4'>
					Current Weather in {weather.response.location.name},{" "}
					{weather.response.location.country}
				</h1>
				<table className='min-w-full border border-gray-200'>
					<thead>
						<tr>
							<th className='py-2 px-4 border-b'>Description</th>
							<th className='py-2 px-4 border-b'>Value</th>
						</tr>
					</thead>
					<tbody>
						<tr className='hover:bg-gray-100 hover:text-black'>
							<td className='py-2 px-4 border-b'>
								Temperature (°C)
							</td>
							<td className='py-2 px-4 border-b'>
								{weather.response.current.temp_c}
							</td>
						</tr>
						<tr className='hover:bg-gray-100 hover:text-black'>
							<td className='py-2 px-4 border-b'>Condition</td>
							<td className='py-2 px-4 border-b'>
								{weather.response.current.condition.text}
							</td>
						</tr>
						<tr className='hover:bg-gray-100 hover:text-black'>
							<td className='py-2 px-4 border-b'>
								Wind Speed (kph)
							</td>
							<td className='py-2 px-4 border-b'>
								{weather.response.current.wind_kph}
							</td>
						</tr>
						<tr className='hover:bg-gray-100 hover:text-black'>
							<td className='py-2 px-4 border-b'>
								Pressure (mb)
							</td>
							<td className='py-2 px-4 border-b'>
								{weather.response.current.pressure_mb}
							</td>
						</tr>
						<tr className='hover:bg-gray-100 hover:text-black'>
							<td className='py-2 px-4 border-b'>Humidity (%)</td>
							<td className='py-2 px-4 border-b'>
								{weather.response.current.humidity}
							</td>
						</tr>
						<tr className='hover:bg-gray-100 hover:text-black'>
							<td className='py-2 px-4 border-b'>
								Feels Like (°C)
							</td>
							<td className='py-2 px-4 border-b'>
								{weather.response.current.feelslike_c}
							</td>
						</tr>
						<tr className='hover:bg-gray-100 hover:text-black'>
							<td className='py-2 px-4 border-b'>
								Dew Point (°C)
							</td>
							<td className='py-2 px-4 border-b'>
								{weather.response.current.dewpoint_c}
							</td>
						</tr>
						<tr className='hover:bg-gray-100 hover:text-black'>
							<td className='py-2 px-4 border-b'>Last Updated</td>
							<td className='py-2 px-4 border-b'>
								{weather.response.current.last_updated}
							</td>
						</tr>
					</tbody>
				</table>
			</div>}

			{/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
		</div>
	)
}

export default CurrentPage
