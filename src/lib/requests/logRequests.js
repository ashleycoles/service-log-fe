const BASE_URL = 'http://localhost:8000/api/'

export async function getLogs() {
    const res = await fetch(BASE_URL + 'logs')

    if (res.ok) {
        return await res.json()
    }

    throw new Error('Request failed')
}

export async function getLog(id) {
    const res = await fetch(`${BASE_URL}logs/${id}`)

    if (res.ok) {
        return await res.json()
    }

    throw new Error('Request failed')
}