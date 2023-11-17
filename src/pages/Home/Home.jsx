import './Home.css'

export const Home = () => {
    return (
        <div className="homeBackground">
            <div className='homeDesign'></div>
            <div className='homeDesign2'>
                We are a contemporary custom tattoo studio located in Valencia. <br />We are Spain’s first female-only staffed studio.<br />
                Yes, we tattoo men too!
            </div>
            <div className='homeBox'>
                <img src='https://www.estudiotatuajesmadrid.com/wp-content/uploads/2021/05/im3.jpg'></img>
                <img src='https://www.estudiotatuajesmadrid.com/wp-content/uploads/2021/05/im2.jpg'></img>
                <img src='https://www.estudiotatuajesmadrid.com/wp-content/uploads/2021/05/im3.jpg'></img>
                <img src='https://www.estudiotatuajesmadrid.com/wp-content/uploads/2021/05/im4.jpg'></img>
                <img src='https://www.estudiotatuajesmadrid.com/wp-content/uploads/2021/05/im5.jpg'></img>
            </div>
            <div className='homeDesign2 bigger'>
                We are also one of only few studios in London to have been awarded 4/4 <br />star rating by the Tattoo Hygiene Rating Scheme.<br />
                Our studio is designed and created by female tattoo artists. <br />Tattoo stations are fitted with hygienic, purpose-built equipment. <br />
                We operate a completely disposable system <br />so that we have no need for scrub rooms or re-sterilised tools. <br />
                All of this makes Velvet Underground Tattoo<br /> a reassuringly clean and comfortable environment to be inked.
            </div>
        </div>
    )
}