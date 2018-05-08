import axios from 'axios'

const baseUrl = '/api/platforms'

const getAll = async () => {
    const response = await axios.get(baseUrl)

    return response.data
}

const create = async (content) => {
    const response = await axios.post(baseUrl, content)

    return response.data
}

export default { getAll, create }