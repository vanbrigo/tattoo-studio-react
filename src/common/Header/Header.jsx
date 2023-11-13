
import React from 'react'
import "./Header.css"
import { HeaderButton } from '../HeaderButton/HeaderButton'

export const Header = () => {
    
    return (
        <div className='headerDesign'>
           <div className='logoHeaderDesign'></div>
           <div className='routesHeader'>
           <HeaderButton
           path={"/gallery"} 
           title="Gallery"
           />
           <HeaderButton
           path={"/login"} 
           title="Log in"
           />
           <HeaderButton
           path={"/register"} 
           title="Sign in"
           />
           </div>
        </div>
    )
}