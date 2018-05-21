export const usernameValid = (username, usernames) => {
    if (username.length < 3) {
        console.log('Username must be at least 3 characters long')
        return false
    }

    if (usernames.includes(username)) {
        console.log('Username must be unique')
        return false
    }

    return true
}

export const passwordValid = (password, passwordRepeat) => {
    if (password !== passwordRepeat) {
        console.log('Password repeat does not match given password')
        return false
    }

    if (password.length < 5) {
        console.log('Password must be at least 5 characters long')
        return false
    }

    return true
}