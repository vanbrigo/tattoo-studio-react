import { Col} from 'react-bootstrap'
import './GalleryCard.css'

export const GalleryCard = ({title,image,tattooArtist}) => {
    
     return (
        <div className="galleryCard">
            <div>{title}</div>
            <div><img className='tattooImage' src={image} alt={title}></img></div>
            <div>{tattooArtist}</div>
        </div>
     )
}