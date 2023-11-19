import { useEffect, useState } from "react"
import "./Profile.css"
import { getMyProfile } from "../../services/apiCalls"
import { useSelector } from "react-redux"
import { userData } from "../userSlice"
import dayjs from 'dayjs'
import { CreateProfile } from "../CreateProfile/CreateProfile"
import { useNavigate } from "react-router-dom"

export const Profile=()=>{
    const [profile, setProfile]=useState()
    const [messageError, setMessageError]=useState()
    const rdxCredentials = useSelector(userData)
    const token=rdxCredentials.credentials.token
    const navigate=useNavigate()
    useEffect(()=>{
        if (!profile){
            getMyProfile(token)
            .then(
                results =>{ if(results.data.data !== null){
                    setProfile(results.data.data)
                }
                else{
                    
                }
                    setMessageError(results.data.data)
                }  
            )
            .catch(error=>
                console.log(error)
            )
        }
    },[profile])

    useEffect(()=>{
        if(!token){
            navigate('/')
        }
    },[token])


    return(
    <div className="profileDesign">
        {!profile 
        ?(<>{!messageError ?(<CreateProfile />) :(<>No ha llegado nada</>)}</>) 
        :(<div className="profileData">
        <div className="imageUser"></div>
        <div className='profileBox'>{profile.user.name}</div>
        <div className='profileBox'>{profile.user.email}</div>
        <div className='profileBox'>{dayjs(profile.birthdate).format('DD-MM-YYYY')}</div>
        <div className='profileBox'>{profile.gender}</div>
        <div className='profileBox'>{profile.address}</div>
    </div>)}
    </div>)
}