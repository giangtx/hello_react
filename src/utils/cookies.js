import Cookies from "js-cookie";

const TOKEN = 'token';

export const setToken = (token) => {
    Cookies.set(TOKEN, token);
}

export const getToken = () => {
    return Cookies.get(TOKEN);
}

export const deleteToken = () => {
    Cookies.remove(TOKEN);
}