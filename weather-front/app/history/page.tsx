"use client"
import { getHistory } from "@/lib/history"
import React from "react"

const HistoryPage = () => {
	const [city, setCity] = React.useState("")
	const [weather, setWeather] = React.useState([])
	const [loading, setLoading] = React.useState(false)
	const [enterCity, setEnterCity] = React.useState(false)

	const get_current = async () => {
		setLoading(true)
		if (!city) {
			setEnterCity(true)
			setLoading(false)
			return
		}
		const res = await getHistory(city).then((res) => {
			setEnterCity(false)
			setWeather(res)
			setLoading(false)
		})
		console.log(res)
	}

	return (
		<div className='flex flex-col min-h-screen justify-center items-center gap-5'>
			<p className='text-2xl'>Get a City Weather History Data</p>
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
			<div>
				{(weather as any).response && (
					<div>
						<p className='text-2xl text-center pb-5'>{(weather as any).response.location.name.toString()}</p>
					</div>
				)}
				{(weather as any).response && (
					<table className='min-w-full border border-gray-200'>
						<thead>
							<tr>
								<th className='py-2 px-4 border-b'>Date</th>
								<th className='py-2 px-4 border-b'>
									Max Temp (°C)
								</th>
								<th className='py-2 px-4 border-b'>
									Min Temp (°C)
								</th>
								<th className='py-2 px-4 border-b'>
									Avg Temp (°C)
								</th>
							</tr>
						</thead>
						<tbody>
							{(weather as any).response.forecast.forecastday.map(
								(day: any, index: number) => (
									<tr
										key={index}
										className='hover:bg-gray-100 hover:text-black'>
										<td className='py-2 px-4 border-b'>
											{day.date}
										</td>
										<td className='py-2 px-4 border-b'>
											{day.day.maxtemp_c}
										</td>
										<td className='py-2 px-4 border-b'>
											{day.day.mintemp_c}
										</td>
										<td className='py-2 px-4 border-b'>
											{day.day.avgtemp_c}
										</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				)}
			</div>
			{enterCity && (
				<p className='text-2xl text-center'>Please enter a city</p>
			)}
			{/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
		</div>
	)
}

export default HistoryPage
