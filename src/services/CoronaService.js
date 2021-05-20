const axios = require("axios")
baseURL = 'https://api.covid19api.com'
const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

module.exports = {
    instance: api,
    getCases: (country,initialDate,finalDate) => api.get(
        `/country/${country}/status/confirmed?from=${initialDate}T00:00:00Z&to=${finalDate}T23:59:59Z`
    )
}