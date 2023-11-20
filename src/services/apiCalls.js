import axios from 'axios'

const host='http://localhost:3000'

export const getAllTattooArtistAppointments = async (token) => {
    return await axios.get(`${host}/user/tattooArtist/my-schedule`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getMyAppointments = async (token) => {
    return await axios.get(`${host}/user/myAppointments`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getAllAppointmentsAvailable = async (token) => {
    return await axios.get(`${host}/appointment_available/`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getAllAppointmentsBooked = async (token) => {
    return await axios.get(`${host}/user/all-appointments-booked`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getMyProfile = async (token) => {
    return await axios.get(`${host}/user/profile`,{headers:{Authorization:`Bearer ${token}`}})
}
export const getAllUsers = async (token) => {
    return await axios.get(`${host}/user/superAdmin/clients`,{headers:{Authorization:`Bearer ${token}`}})
}
export const getAllTattooArtists = async (token) => {
    return await axios.get(`${host}/user/tattooArtistsAvailable`,{headers:{Authorization:`Bearer ${token}`}})
}

export const getTattooGallery = async () => {
    return await axios.get(`${host}/user/tattooArtist/gallery`)
}

export const logUser = async(body)=>{
    return await axios.post(`${host}/user/login`,body)
}

export const registerUser = async(body)=>{
    return await axios.post(`${host}/user/register`,body)
}

export const createAppointment = async(body,token)=>{
    return await axios.post(`${host}/appointment_available/new`,body,{headers:{Authorization:`Bearer ${token}`}})
}
export const createProfile = async(body,token)=>{
    return await axios.post(`${host}/user/profile`,body,{headers:{Authorization:`Bearer ${token}`}})
}

export const updateAppointment = async(id,newTime,token)=>{
    const body={id:id,
                time:newTime}
    return await axios.put(`${host}/appointment_available/update`,body,{headers:{Authorization:`Bearer ${token}`}})
}

export const takeAppointmentAvailable = async(purpose,idAppointment,token)=>{
    const body={purpose,appointment_available_id:idAppointment}
    return await axios.post(`${host}/user/newAppointment`,body,{headers:{Authorization:`Bearer ${token}`}})
}

export const cancelAppointment = async(id,token)=>{
    console.log(id)
    return await axios.delete(`${host}/user/cancelAppointment/${id}`,{headers:{Authorization:`Bearer ${token}`}})
}

export const deleteAppointment = async(id,token)=>{
    return await axios.delete(`${host}/appointment_available/delete/${id}`,{headers:{Authorization:`Bearer ${token}`}})
}
