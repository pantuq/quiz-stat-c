/* eslint-disable @typescript-eslint/no-explicit-any */
const HOST = 'http://localhost:3001'
export async function get(url: string){
    const res = await fetch(`${HOST}${url}`)
    const data = res.json()
    return data
}

export async function post(url: string, body: any){
    const res = await fetch(`${HOST}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = res.json()
    return data
}