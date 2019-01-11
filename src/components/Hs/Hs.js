import React from 'react';
import VideoHs from './../Video/VideoHs';
import back_5 from './../../media/pproject_files/pproject_5.jpg'
import back_8 from './../../media/pproject_files/pproject_8.jpg'
import frankgood from './../../media/franklin+good.jpg'
import nray from './../../media/NateRay.jpg'



export default function Hs() {
    return (
        <div className='hsContainer'>
            <div style={{backgroundColor: 'black'}}>
                <VideoHs />
                <div className='hsHeader'>
                    <h1 id='hsHeader'>FALL FLING</h1>
                </div>
            </div>
            <div className='hs_body_container'>
                
                <div className='hsbodyOne'>
                    <h3>BRAND NEW THIS YEAR:</h3>
                    <h3>FALL FLING</h3>
                    <p>Join us for our first annual High School Fall Fling Event; a gathering of youth from all over Utah, hosted by the Christian Youth Network of Utah, coming together for an overnight experience of fun, food, worship, learning and fellowship. *We now host separate HS-only and JH-only Events. Our JH Spring Fling event is scheduled for March 29, 2019</p>
                </div>
                <div className='hsback_img_5'>
                    {/* <img  src={back_5} alt=''/> */}
                </div>
                <div className='hsbodyTwo'>
                    <h3 id='headers'>FEATURING</h3>
                    <div className="featuringCards">
                        <div className='subP_one'> 
                            <img id='frankgoodpic'src={frankgood} alt='franklin good'/>
                            <div className="cardInfo">
                                <h4>Taylor Bell with Franklin Good</h4>
                                <p>We are excited to worship with Taylor Bell who is apart of the band Franklin Good. Join us for an exciting night of incredible music and worship!</p>
                            </div>
                        </div>
                        <div className='subP_two'>
                            <img id='nraypic' src={nray} alt='Nate Ray'/> 
                            <div className="cardInfo">
                                <h4>Nate Ray </h4>
                                
                                <p>We are pumped to hear from Nate Ray, Pastoral Resident at Missio Dei Salt Lake City, as he shares about what life looks like when we live in relationship with Jesus.</p>
                            </div>
                        </div>
                    </div>
                    
                
                </div>
            </div>
        </div>

    )
}