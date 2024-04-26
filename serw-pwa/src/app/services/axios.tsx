import axios from 'axios';

const weatherUrl: string = 'https://api.weatherapi.com/v1';

const axiosInstance = axios.create({ 
    baseURL: weatherUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

