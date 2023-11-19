import { useSelector } from 'react-redux'
import './AllTattooArtists.css'
import { useEffect, useState } from 'react'
import { userData } from '../userSlice'
import { getAllTattooArtists } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

export const AllTattooArtists = () => {
    const [tattooArtists,setTattooArtists]=useState([])
    const rdxCredentials=useSelector(userData)
    const token= rdxCredentials.credentials.token
    const navigate=useNavigate()
    const decodedToken=jwtDecode(token)

    useEffect(()=>{
        if (tattooArtists.length === 0){
            getAllTattooArtists(token)
            .then(
                results =>{
                    setTattooArtists(results.data.data)    
                    console.log(results.data.data)
                }
                
            )
            .catch(error=>console.log(error))
        }
    },[tattooArtists])

    useEffect(()=>{
        if(decodedToken.role !== 'super_admin'){
            navigate('/')
        }
    },[rdxCredentials])

    return (
        <div className="allTattooArtistsDesign">
            {tattooArtists.length > 0
                ? (<>
                    {tattooArtists.map(user => {
                        return (<div
                            className='userCard'
                            key={user.id}>
                            <div >{user.name}</div>
                            <div>{user.email}</div>
                            <div>{user.phone_number}</div>
                        </div>
                        )
                    })
                    }
                </>
                )
                :(
                <div>Nothing here</div>
                )
            }

        </div>
    )
}