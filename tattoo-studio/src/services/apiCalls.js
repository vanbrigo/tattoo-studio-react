import axios from 'axios'

export const logUser = async(body)=>{
    return await axios.post(`localhost:6000/user/login`,body)
}