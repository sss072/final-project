const location = 'london'
const token = '5da5010b3446191cc7eaaf11e8835f9c'

export const server_calls = {
    get: async () => {
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${location}&appid=${token}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok){
            throw new Error('Failed to fetch your data from the server...')
        }
        return await response.json()
    },
    create: async (data: any = {}) =>{
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${location}&appid=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create your drone...')
        }
        console.log('response from api', response)
        return await response.json()

    }
}
