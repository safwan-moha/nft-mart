export const authorize = (username) => {
    if (username === 'user') {
        return {
            username,
            role: {
                "USER:READ": true,
                "ADMIN:READ_WRITE": false
            }
        }
    } else if (username === 'admin') {
        return {
            username,
            role: {
                "USER:READ": true,
                "ADMIN:READ_WRITE": true
            }
        }
    }
    return false
}
