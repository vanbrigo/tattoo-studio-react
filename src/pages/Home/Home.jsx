import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'

export const Home = () => {
    return (
        <Container fluid className="homeBackground">
        
            <Row className='homeDesign'></Row>
            <Col className='homeDesign2 text-center'>
                We are a contemporary custom tattoo studio located in Valencia. <br />We are Spain’s first female-only staffed studio.<br />
                Yes, we tattoo men too!
            </Col>
            <Row className='homeBox'>
                <Col sm={12} lg={6} xl={2} xxl={2} className='boxImage'>
                <img className='imageBox' src='https://www.estudiotatuajesmadrid.com/wp-content/uploads/2021/05/im3.jpg'></img>
                </Col>
                <Col sm={12} lg={6} xl={2} xxl={2} className='boxImage '>
                <img className='imageBox' src='https://www.estudiotatuajesmadrid.com/wp-content/uploads/2021/05/im2.jpg'></img>
                </Col>
                <Col sm={12} lg={6} xl={2} xxl={2} className='boxImage '>
                <img className='imageBox' src='https://www.estudiotatuajesmadrid.com/wp-content/uploads/2021/05/im4.jpg'></img>
                </Col>
            </Row>
            <Row className='homeDesign2 text-center'>
                <Col>
                We are also one of only few studios in London to have been awarded 4/4 <br />star rating by the Tattoo Hygiene Rating Scheme.<br />
                Our studio is designed and created by female tattoo artists. <br />Tattoo stations are fitted with hygienic, purpose-built equipment. <br />
                We operate a completely disposable system <br />so that we have no need for scrub rooms or re-sterilised tools. <br />
                All of this makes Velvet Underground Tattoo<br /> a reassuringly clean and comfortable environment to be inked.
                </Col>
            </Row>
            <Row className='tattooArtistHome'>
            <Col sm={12} md={4} lg={4} xl={4} xxl={4}>
                <img className=' img-fluid' src='https://img.freepik.com/foto-gratis/retrato-estudio-chica-rubia-maquillaje-original-cuello-tatuaje-muslo-vestido-negro-fondo-oscuro-sentado-escalera-roja_627829-10209.jpg?size=626&ext=jpg&ga=GA1.1.1680278663.1699989692&semt=ais'></img>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} xxl={4}>
                <img className=' img-fluid' src='https://img.freepik.com/foto-gratis/retrato-blanco-negro-mujer-tatuajes-cuerpo_23-2150774693.jpg?size=626&ext=jpg&ga=GA1.1.1680278663.1699989692&semt=ais'></img>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} xxl={4}>
                <img className='imageTattooArtists img-fluid' src='https://img.freepik.com/foto-gratis/mujer-cabello-afro-negro-tatuaje-su-mano_246466-31.jpg?size=626&ext=jpg&ga=GA1.1.1680278663.1699989692&semt=ais'></img>
            </Col>
            </Row>
            <Row className='contactHome'>

            </Row>
        
        </Container >
    )
}