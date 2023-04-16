import sendRequest from './send-request';
const BASE_URL = './api/fish';

export function getAll() {
    return sendRequest(BASE_URL);
}

//may need a getById function if I have time to create a fish detail page