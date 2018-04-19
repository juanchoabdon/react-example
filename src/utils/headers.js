const headers = {

    simple() {
        const headers = {
            'Content-Type': 'application/json',
        }
        return headers;
    },

    auth() {
        const token = localStorage.getItem('bitgetToken');
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        return headers;
    }


}

export default headers;