import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/api';


const registerUser = (data) => {
    return axios.post(SERVER_URL + '/register', data, {
        headers: { 'Content-Type': 'application/json' }
    });
};


const loginUser = (data)=>{
    return axios.post(SERVER_URL+'/login',data,{
        headers: { 'Content-Type': 'application/json' }
    });
}


const AuthServices = {
    registerUser,
    loginUser
}


export default AuthServices;


