import axios from 'axios'

export const getAllTattooArtistAppointments = async (token) => {
    return await axios.get(`http://localhost:3000/user/tattooArtist/my-schedule`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getMyAppointments = async (token) => {
    return await axios.get(`http://localhost:3000/user/myAppointments`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getMyProfile = async (token) => {
    return await axios.get(`http://localhost:3000/user/profile`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getTattooGallery = async () => {
    return await axios.get(`http://localhost:3000/user/tattooArtist/gallery`)
}

export const logUser = async(body)=>{
    return await axios.post(`http://localhost:3000/user/login`,body)
}

export const registerUser = async(body)=>{
    return await axios.post(`http://localhost:3000/user/register`,body)
}

export const createAppointment = async(body,token)=>{
    return await axios.post(`http://localhost:3000/appointment_available/new`,body,{headers:{Authorization:`Bearer ${token}`}})
}

