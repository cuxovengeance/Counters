const api = {
    get: (url) => {
        return fetch(url, {method: 'get' })
        .then(res => res.json())
    },

    post: (url, data) => {
        return fetch(url, {
            method: 'post',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    },

    delete: (url, data) => {
        return fetch(url, {
            method: 'delete',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }
}

export default api;
