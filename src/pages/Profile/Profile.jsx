import { useEffect, useState } from "react"
import "./Profile.css"
import { getMyProfile } from "../../services/apiCalls"
import { useSelector } from "react-redux"
import { userData } from "../userSlice"
import dayjs from 'dayjs'
import { CreateProfile } from "../CreateProfile/CreateProfile"

export const Profile=()=>{
    const [profile, setProfile]=useState()
    const [messageError, setMessageError]=useState()
    const rdxCredentials = useSelector(userData)
    const token=rdxCredentials.credentials.token
    useEffect(()=>{
        if (!profile){
            getMyProfile(token)
            .then(
                results =>{ if(results.data.data !== null){
                    console.log(results.data.data)
                    setProfile(results.data.data)
                }
                else{
                    
                }
                console.log(results.data.data)
                    setMessageError(results.data.data)
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
        ?(<>{!messageError ?(<CreateProfile />) :(<>No ha llegado nada</>)}</>) 
        :(<div className="profileData">
        <div>{profile.user.name}</div>
        <div>{profile.user.email}</div>
        <div>{dayjs(profile.birthdate).format('DD-MM-YYYY')}</div>
        <div>{profile.gender}</div>
        <div>{profile.address}</div>
    </div>)}
    </div>)
}