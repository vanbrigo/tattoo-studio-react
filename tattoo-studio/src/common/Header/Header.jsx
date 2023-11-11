
import React from 'react'
import "./Header.css"
import { HeaderButton } from '../HeaderButton/HeaderButton'

export const Header = () => {
    
    return (
        <div className='headerDesign'>
           <div className='logoHeaderDesign'></div>
           <div className='routesHeader'>
           <HeaderButton
           path={"/login"} 
           title="Log in"
           />
           <HeaderButton
           path={"/register"} 
           title="Sign up"
           />
           </div>
        </div>
    )
}