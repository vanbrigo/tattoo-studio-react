import { useEffect, useState } from 'react'
import { GalleryCard } from '../../common/GalleryCard/GalleryCard'
import { getTattooGallery } from '../../services/apiCalls'
import './Gallery.css'
import { Container, Row } from 'react-bootstrap'

export const Gallery = () => {
    const [portfolio,setPortfolio]=useState([])

    useEffect(()=>{
        if (portfolio.length === 0){
            getTattooGallery()
            .then(
                appointments =>{
                    setPortfolio(appointments.data.data)    
                }
                
            )
            .catch(error=>console.log(error))
        }
    },[portfolio])



     return (
         <div className="GalleryDesign">
            
            {portfolio.length>0
                    ? (<div className='galleryBox'>
                            {portfolio.map(portfolio => {
                                return (<GalleryCard 
                                         key={portfolio.id}
                                         image={portfolio.image_url}
                                         tattooArtist={portfolio.name}
                                        />
                                        )})
                            }
                        </div>
                    )
                    : (
                        <div>Nothing here</div>
                    )
            }
            
         </div>
     )
}