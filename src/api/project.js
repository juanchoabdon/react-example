import store from 'store';
import headers from 'utils/headers';

const API_SERVER = process.env.REACT_APP_API_SERVER;

const project = {

    async getAll() {
        const response = await fetch(`${API_SERVER}projects`, { 
            headers: headers.auth()
        });
        return response.json();
    },

    async get(projectId) {
        const response = await fetch(`${API_SERVER}project/${projectId}`, { 
            headers: headers.auth()
        });
        return response.json();
    },

    async add(newProject) {
        const body = JSON.stringify(newProject)
        const response = await fetch(`${API_SERVER}project/create`, { 
            headers: headers.auth(),
            method: 'POST',
            body
        });
        return response.json();
    },

    async invite(data) {
        const body = JSON.stringify(data);
        const response = await fetch(`${API_SERVER}project/invite`, { 
            headers: headers.auth(),
            method: 'POST',
            body
        });
        return response.json();
    },

    async verifyInvitation(token) {
        const response = await fetch(`${API_SERVER}project/invitation/${token}`);
        return response.json(); 
    }


}

export default project;