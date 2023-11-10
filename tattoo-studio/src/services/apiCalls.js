import axios from 'axios'

export const logUser = async(body)=>{
    return await axios.post(`http://localhost:3000/user/login`,body)
}

export const registerUser = async(body)=>{
    return await axios.post(`http://localhost:3000/user/register`,body)
}

export const createAppointment = async(body)=>{
    return await axios.post(`http://localhost:3000/appointment_available/new`,body)
}