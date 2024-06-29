const config = {
    apiPath: 'http://13.250.3.198:3001',
    headers: () => {
        return {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
    }
}

export default config;