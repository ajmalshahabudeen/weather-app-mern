# Docs

This is a simple weather monitoring app written in typescript (Nextjs and Express).
It can get current weather of a city (Input field available in tha page) and history of two dates (no time to implement other features) "2024-09-01" & "2024-09-02"

## Tech Stacks Used

1. Next.js for frontend
2. Express.js for backend
3. Used Language Typescript

## Routes 

### Frontend
1. http://localhost:3000/current -> To view the current weather a city
2. http://localhost:3000/history -> To view the "2024-09-01" and "2024-09-02" dates weather history

### Backend
1. http://localhost:3001/current?q={cityname}
2. http://localhost:3001/hiistory?q={cityname}
