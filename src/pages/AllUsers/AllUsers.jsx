import './AllUsers.css'
import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/apiCalls"
import { useSelector } from "react-redux"
import { userData } from "../userSlice"



export const AllUsers = () => {
    const [users,setUsers]=useState([])
    const rdxCredentials=useSelector(userData)
    const token= rdxCredentials.credentials.token

    useEffect(()=>{
        if (users.length === 0){
            getAllUsers(token)
            .then(
                results =>{
                    setUsers(results.data.data)    
                    console.log(results.data.data)
                }
                
            )
            .catch(error=>console.log(error))
        }
    },[users])

    return (
        <div className="allUsersDesign">
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

        </div>
    )
}
