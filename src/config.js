const getConfig = () => {
    return {
        restPort: process.env.REST_PORT
    }
}

export { getConfig }