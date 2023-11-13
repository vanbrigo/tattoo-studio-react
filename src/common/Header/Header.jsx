
import React, { useEffect, useState } from 'react'
import "./Header.css"
import { HeaderButton } from '../HeaderButton/HeaderButton'
import { useSelector, useDispatch } from "react-redux";
import { logout, userData } from "../../pages/userSlice";
import { Navigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'


export const Header = () => {
    const dispatch = useDispatch();
    const rdxCredentials = useSelector(userData);
    
    const logOutMe = () => {
  
      dispatch(logout( {credentials : ""}))

      Navigate("/")
    }
    return (
        <div className='headerDesign'>
           <div className='logoHeaderDesign'></div>
           <HeaderButton
           path={"/gallery"} 
           title="Gallery"
           />
           {!rdxCredentials?.credentials.token ? (
            <div className='routesHeader'>
           <HeaderButton
           path={"/login"} 
           title="Log in"
           />
           <HeaderButton
           path={"/register"} 
           title="Sign in"
           />
           </div>):(
            <div className='routesHeader'>
            <HeaderButton
           path={"/my-appointments"} 
           title={"My appointments"}
           />
            <HeaderButton
           path={"/profile"} 
           title={`Hi, ${rdxCredentials.credentials.data}`}
           />
           <div onClick={logOutMe}>
            <HeaderButton 
            path={"/"} 
            title={"log out"} 
            />  
          </div>
            </div>
           )}
        </div>
    )
}