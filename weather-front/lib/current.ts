'use server'

export const getCurrent = async (city: string) => {
    const response = await fetch('http://localhost:3001/api/current?q=' + city, {
        method: 'GET',
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data
}