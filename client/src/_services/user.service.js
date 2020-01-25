import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getTodos,
    getById,
    update,
    delete: _delete
};
const baseUrl = `http://localhost:3001`;

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${baseUrl}/users/loginMe`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if(user.status){
                localStorage.setItem('user', JSON.stringify(user.result));
                return user;
            }else{
                return false;
            }
        });
}

function logout() {
    localStorage.removeItem('user');
}

function getTodos() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${baseUrl}/todos/list`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${baseUrl}/users/registerMe`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}