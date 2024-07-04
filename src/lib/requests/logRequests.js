const BASE_URL = 'http://localhost:8000/api/'

export async function getLogs(type = null) {
    let url = `${BASE_URL}logs`

    if (type) {
        url += `?type=${type}`
    }

    const res = await fetch(url)

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