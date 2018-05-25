import axios from 'axios'
import { getConfig } from '../util/serviceHelper'

const baseUrl = '/api/usergames'

const getAll = async () => {
    const response = await axios.get(baseUrl)

    return response.data
}

const getOne = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)

    return response.data
}

const create = async (content) => {
    const response = await axios.post(baseUrl, content, getConfig())

    return response.data
}

const update = async (id, content) => {
    const response = await axios.put(`${baseUrl}/${id}`, content, getConfig())

    return response.data
}

const remove = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`, getConfig())
    console.log(response)
}

export default { getAll, getOne, create, update, remove }