import axios from 'axios';

interface Props {
    email: string;
    password: string;
}

export const userLogin = ({email, password}:Props) => {

    const api_URL = "http://challenge-react.alkemy.org/"

    return axios.post(api_URL, {
        email,
        password
    })
}