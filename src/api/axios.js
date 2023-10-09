import axios from "axios";

export const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json'
    }
})