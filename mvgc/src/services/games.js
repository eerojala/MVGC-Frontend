import axios from 'axios'

const baseUrl = '/api/games'
let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)

    return response.data
}

const create = async (content) => {
    const config = {
        headers: { 'Authorization': token }
    }

    const response = await axios.post(baseUrl, content, config)

    return response.data
}

export default { setToken, getAll, create }