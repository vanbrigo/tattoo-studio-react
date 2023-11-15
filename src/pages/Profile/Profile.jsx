import { useEffect, useState } from "react"
import "./Profile.css"
import { Navigate } from "react-router-dom"
import { getMyProfile } from "../../services/apiCalls"
import { useSelector } from "react-redux"
import { userData } from "../userSlice"
import dayjs from 'dayjs'

export const Profile=()=>{
    const [profile, setProfile]=useState()
    const rdxCredentials = useSelector(userData)
    const token=rdxCredentials.credentials.token
    useEffect(()=>{
        if (!profile){
            getMyProfile(token)
            .then(
                results =>{
                    console.log(results.data.data)
                    setProfile(results.data.data)
                    
                }  
            )
            .catch(error=>
                console.log(error)
            )
        }
    },[profile])


    return(
    <div className="profileDesign">
        {!profile 
        ?(<>no tienes perfil</>) 
        :(<div className="profileData">
        <div>{profile.user.name}</div>
        <div>{profile.user.email}</div>
        <div>{dayjs(profile.birthdate).format('DD-MM-YYYY')}</div>
        <div>{profile.gender}</div>
        <div>{profile.address}</div>
    </div>)}
    </div>)
}