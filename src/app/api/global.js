export function getJwt()  {
    const token = localStorage.getItem('token');
    return token;
}

export function setInitialLocalStorage(jwt,id) {
    localStorage.setItem('token', jwt);
    localStorage.setItem('id', id);
}

export function logout() {
    localStorage.clear();
}
