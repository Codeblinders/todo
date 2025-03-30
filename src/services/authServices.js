import axios from 'axios';

const SERVER_URL = 'https://todo-3-nq89.onrender.com/api';


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


