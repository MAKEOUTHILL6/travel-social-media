
export const settings = {
    host: ''
}


async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}


function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    };

    const token = sessionStorage.getItem('accessToken');

    if (token != null) {

        options.headers['X-Authorization'] = token;

    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}


export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}


export async function login(username, password) {

    const result = await post(settings.host + '/user/login', { username, password });

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('accessToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('imageId', result.imageId);

    return result;
};


export async function register(data) {

    const result = await post(settings.host + '/user/register', { data });


    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('accessToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('imageId', result.imageId);

    return result

}

export function logout() {

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('imageId');

}