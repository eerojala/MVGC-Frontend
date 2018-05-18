let token = null

export const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

export const config = {
    headers: { 'Authorization': token }
}