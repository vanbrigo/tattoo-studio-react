import { useSelector } from 'react-redux'
import { InputDate } from '../../common/InputDate/InputDate'
import './CreateProfile.css'
import { userData } from '../userSlice'
import { useState } from 'react'
import { Input } from '../../common/Input/Input'
import { createProfile } from '../../services/apiCalls'
import { Button } from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'


export const CreateProfile = () => {
    const navigate=useNavigate()
    const rdxCredentials = useSelector(userData)
    const token=rdxCredentials.credentials.token
    const [details,setDetails]=useState({
        birthdate:"",
        gender:"",
        address:""
    })
    const functionHandler = (e) => {
        console.log(e.target.value)
        setDetails((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
       
    }
    const checkError=()=>{
        console.log()
    }
    const addProfile=()=>{
        createProfile(details,token)
        .then(results=>{
            console.log(results.data)
            navigate('/')
        })
        .catch(error=> console.log(error))

    }

    return(<div className='createProfileDesign'>
        <InputDate
            name={"birthdate"}
            type={"date"}
            style='inputDateDesign'
            lenght={"10"}
            placeholder={"date"}
            functionProp={functionHandler}
            />
            <select name="gender" onChange={(e)=>functionHandler(e)} className='genderPicker'>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non_binary">Non binary</option>
                </select>
            <Input
            name={"address"}
            type={"text"}
            style='inputAddressProfile'
            maxLenght={"100"}
            placeholder={"address"}
            functionProp={functionHandler}
            functionCheck={checkError}
            />
            <Button
            style={"createProfileButton"}
            functionToDo={addProfile}
            title={"Save"}
            />
    </div>)
}