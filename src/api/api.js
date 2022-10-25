
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

    const token = sessionStorage.getItem('authToken');

    if (token != null) {

        options.headers['X-Authorization'] = token;

    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}


export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async function register(username, password, rePassword) {
    const result = await post(settings.host + '/user/register', { username, password, rePassword });

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('accessToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);

    return result
}