import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://localhost:19006' // Use your local network IP
})

export default apiClient;
