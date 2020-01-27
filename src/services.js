import axios from 'axios';

export const getUser = () => {
    return new Promise(resolve => {
        axios.get(process.env.API_URL + '/users/test')
            .then(response => resolve(response.data));
    });
};

export const createSession = () => {
    return new Promise(resolve => {
        axios.get(process.env.API_URL + '/session/create').then(response => {
            console.log(response);
            resolve(response.data);
        }).catch(error => console.log(error));
    });
};

export const readSession = (uuid) => {
    return new Promise(resolve => {
        axios.post(process.env.API_URL + '/session/read', {
            uuid: uuid
        }).then(response => {
            resolve(response.data)
        }).catch(error => console.log(error));
    });
};

export const updateSession = (uuid,cart_products) => {
    return new Promise(resolve => {
        axios.post(process.env.API_URL + '/session/update', {
            uuid: uuid,
            cart_products: cart_products
        }).then(response => {
            resolve(response.data)
        }).catch(error => console.log(error));
    });
};

export const getProducts = (endpoint = '') => {
    return new Promise(resolve => {
        axios.get(process.env.API_URL + '/products/' + endpoint)
            .then(response => resolve(response.data));
    });
};

export const getProductsById = (product_ids) => {
    return new Promise(resolve => {
        axios.post(process.env.API_URL + '/products/by-ids', {
            product_ids:product_ids
        }).then(response => {
            resolve(response.data)
        }).catch(error => console.log(error));
    });
};