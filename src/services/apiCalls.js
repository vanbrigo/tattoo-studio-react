import axios from 'axios'

export const getAllTattooArtistAppointments = async (token) => {
    return await axios.get(`http://localhost:3000/user/tattooArtist/my-schedule`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getMyAppointments = async (token) => {
    return await axios.get(`http://localhost:3000/user/myAppointments`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getAllAppointmentsAvailable = async (token) => {
    return await axios.get(`http://localhost:3000/appointment_available/`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getAllAppointmentsBooked = async (token) => {
    return await axios.get(`http://localhost:3000/user/all-appointments-booked`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getMyProfile = async (token) => {
    return await axios.get(`http://localhost:3000/user/profile`,{headers:{Authorization:`Bearer ${token}`}})
}
export const getAllUsers = async (token) => {
    return await axios.get(`http://localhost:3000/user/superAdmin/clients`,{headers:{Authorization:`Bearer ${token}`}})
}
export const getAllTattooArtists = async (token) => {
    return await axios.get(`http://localhost:3000/user/tattooArtistsAvailable`,{headers:{Authorization:`Bearer ${token}`}})
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
export const createProfile = async(body,token)=>{
    return await axios.post(`http://localhost:3000/user/profile`,body,{headers:{Authorization:`Bearer ${token}`}})
}

export const takeAppointmentAvailable = async(purpose,idAppointment,token)=>{
    const body={purpose,appointment_available_id:idAppointment}
    return await axios.post(`http://localhost:3000/user/newAppointment`,body,{headers:{Authorization:`Bearer ${token}`}})
}

export const cancelAppointment = async(body,token)=>{
    console.log(token)
    return await axios.delete(`http://localhost:3000/user/cancelAppointment`,body,{headers:{Authorization:`Bearer ${token}`}})
}

