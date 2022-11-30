import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://localhost:8080' // Use your local network IP
})

export default apiClient;
