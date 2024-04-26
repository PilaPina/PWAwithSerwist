
import axios from 'axios';
//import { NextRequest as req } from 'next/server';

export async function GET(req: Request) {
     try {
         const apiKey = process.env.SECRET_WEATHER_KEY;
         //const searchParams = new URL(req.url).searchParams;
         //const city = searchParams.get('city');

        console.log("apiKey", apiKey)
         const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Reykjavik&aqi=yes`);

         console.log('Axios response:', response.data);

         return (
            Response.json(response.data)
         )   
        

        if (response.status !== 200) {
         throw new Error('Failed to fetch weather data');
         }

     } catch (error) {
         console.error('Error fetching data:', error);

         return Response.json({ error });
     }
};

export const revalidate = 0;
