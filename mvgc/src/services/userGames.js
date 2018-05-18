import axios from 'axios'
import { config } from '../util/serviceHelper'

const baseUrl = '/api/usergames'

const getAll = async () => {
    const response = await axios.get(baseUrl)

    return response.data
}

const create = async (content) => {
    const response = await axios.post(baseUrl, content, config)

    return response.data
}

export default { getAll, create }