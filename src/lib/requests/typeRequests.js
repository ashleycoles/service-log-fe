export async function getTypes() {
    const res = await fetch('http://localhost:8000/api/types')

    if (res.ok) {
        return await res.json()
    }

    throw new Error('Request failed')
}