import axios from 'axios';
import { ResHeroByName as Response } from '../types/interfaces';

export const heroesByName = (name: string): Promise<Response> => {
    
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN || 379932106978719

    const api_URL = `https://superheroapi.com/api.php/${accessToken}`;

    return axios.get(`${api_URL}/search/${name}`)
}