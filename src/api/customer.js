import store from 'store';
import headers from 'utils/headers';

const API_SERVER = process.env.REACT_APP_API_SERVER;

const customer = {

    async login(email , password) {
        const body = JSON.stringify({ email, password });
        const response = await fetch(`${API_SERVER}login`, { 
                headers: headers.auth(),
                method: 'POST', 
                body 
            });
        return response.json();
    },

    logout() {

        localStorage.removeItem('bitgetToken');
        store.dispatch({
            type: 'SET_LOGGED_CUSTOMER',
            logged: false
        })

    },

    async get() { 
        const token = localStorage.getItem('bitgetToken');

        if (!token) {
            store.dispatch({
                type: 'SET_LOGGED_CUSTOMER',
                logged: false
            }) 
            return;
        }

        let response = await fetch(`${API_SERVER}`, { headers: headers.auth() } );
        response = await response.json()

        store.dispatch({
            type: 'SET_LOGGED_CUSTOMER',
            logged: response.success,
            customer: response.data
        })
                        
    },
    
    async create(data) {
        const response = await fetch(`${API_SERVER}create`, { 
                headers: headers.simple(),
                method: 'POST', 
                body: JSON.stringify(data)
            });
        return response.json();
    },

    async edit(data) {
        const response = await fetch(`${API_SERVER}update`, { 
            headers: headers.auth(),
            method: 'PUT', 
            body: JSON.stringify(data)
        });
        return response.json();  
    },

    async editPassword(data) {
        const response = await fetch(`${API_SERVER}update/password`, { 
            headers: headers.auth(),
            method: 'PUT', 
            body: JSON.stringify(data)
        });
        return response.json();   
    }
} 

export default customer;
