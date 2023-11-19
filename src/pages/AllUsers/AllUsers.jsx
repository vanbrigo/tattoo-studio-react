import './AllUsers.css'
import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/apiCalls"
import { useSelector } from "react-redux"
import { userData } from "../userSlice"
import { Container } from "react-bootstrap"
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'



export const AllUsers = () => {
    const [users,setUsers]=useState([])
    const rdxCredentials=useSelector(userData)
    const token= rdxCredentials.credentials.token
    const decodedToken=jwtDecode(token)
    const navigate=useNavigate()

    useEffect(()=>{
        if (users.length === 0){
            getAllUsers(token)
            .then(
                results =>{
                    setUsers(results.data.data)    
                }
                
            )
            .catch(error=>console.log(error))
        }
    },[users])

    useEffect(()=>{
        if(decodedToken.role !=='super_admin'){
            navigate('/')
        }
    },[rdxCredentials])

    return (
        <Container className="allUsersDesign">
            {users.length > 0
                ? (<>
                    {users.map(user => {
                        return (<div
                            className='userCard'
                            key={user.id}>
                            <div >{user.name}</div>
                            <div>{user.email}</div>
                            <div>{user.phone_number}</div>
                            <div>{user.is_active.toString()}</div>
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

        </Container>
    )
}
