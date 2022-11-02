import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;


export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getPublications() {
    return await api.get(host + '/data/publication');
}

export async function getPublicationById(id) {
    return await api.get(host + '/data/publication/' + id);
}

export async function getSearchedPublications(data) {
    return await api.post(host + '/data/publication/search', data);
}

export async function getProfileImage(data){
    return await api.post(host + '/user/upload', data);
}

export async function createPost(data) {
    return await api.post(host + '/data/publication', data);
}


export async function updatePublication(id, data) {
    return await api.put(host + '/data/publication/' + id, data);
}


export async function deletePublication(id) {
    return await api.del(host + '/data/publication/' + id);
}


export async function getUser(id) {
    return await api.get(host + '/user/' + id);
}

export async function updateUser(id, data) {
    return await api.post(host + '/user/' + id, data);
}