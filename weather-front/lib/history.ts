
'use server'

export const getHistory = async (city: string) => {
    const response = await fetch('http://localhost:3001/api/history?q=' + city, {
        method: 'GET',
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data
}