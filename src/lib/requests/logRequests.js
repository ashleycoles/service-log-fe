import { ApiValidationError } from "../errors/ApiValidationError"

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

export async function addLog(title, type, date, notes, images) {

    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', type);
    formData.append('date', date);
    formData.append('notes', notes);
    
    images.forEach(image => formData.append('images[]', image))

    console.log(formData)

    const res = await fetch(`${BASE_URL}logs`, {
        mode: 'cors',
        method: 'post',
        headers: {
            "Accept": "application/json"
        },
        body: formData,
    })

    if (res.status === 201) {
        return await res.json()
    }

    if (res.status === 422) {
        const result = await res.json()
        throw new ApiValidationError(result.message, result.errors)
    }

    throw new ApiValidationError('Request failed')
}