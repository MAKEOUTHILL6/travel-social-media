import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;


export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getPublications() {
    return await api.get(host + '/data/publication');
}

export async function createPost(data){
    return await api.post(host + '/data/publication', data);
}

export async function deletePublication(id) {
    return await api.del(host + '/data/publication/' + id);
}