import axios from 'axios'

export const getAllAppointmentsAvailableByTattooArtist = async () => {
    return await axios.get(`https://localhost:3000/user/tattooArtist/appointments`)
}

export const getMyAppointments = async (token) => {
    return await axios.get(`https://localhost:3000/user/myAppointments`,{headers:{Authorization:`Bearer ${token}`}})
}

export const logUser = async(body)=>{
    return await axios.post(`http://localhost:3000/user/login`,body)
}

export const registerUser = async(body)=>{
    return await axios.post(`http://localhost:3000/user/register`,body)
}

export const createAppointment = async(body)=>{
    return await axios.post(`http://localhost:3000/appointment_available/new`,body)
}

