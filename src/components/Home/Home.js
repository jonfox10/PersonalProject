import React from 'react';
import Video from './../Video/Video'
import logo from './../../media/pproject_files/pproject_logo_2.png'
import back_6 from './../../media/pproject_files/pproject_6.jpg'
import back_8 from './../../media/pproject_files/pproject_8.jpg'

export default function Home() {
    return (
        <div className='homeContainer' >
                <div className='homeVid'>
                    <Video />
                </div>
                <div className='heroLogo'>
                    <img  src={logo} alt='CYN is christian youth network of utah' width='50%'/>
                </div>
            
            <div className='home_body_container'>
                
                <div className='bodyOne'>
                    <h3>WHAT IS CYN?</h3>
                    <p>The Christian Youth Network of Utah is a network of interdenominational full-time, part-time, and volunteer youth workers in the greater Salt Lake Valley Area. As crazy as it sounds, we love working with Middle School and High School students. We want them to know Jesus. This network exists becuse we believe, "we are better together than apart".</p>
                </div>
                <div className="imageContainer">
                {/* ./../../media/pproject_files/pproject_6.jpg */}
                </div>
                <div className='bodyTwo'>
                    <h3>HOW DO I GET ENVOLVED?</h3>
                    <p>Join us for our first annual High School Fall Fling Event; a gathering of youth from all over Utah, hosted by the Christian Youth Network of Utah, coming together for an overnight experience of fun, food, worship, learning and fellowship. *We now host separate HS-only and JH-only Events. Our JH Spring Fling event is scheduled for March 29, 2019. Go to the News page of this site to see the latest information of when and where we are meeting.</p>
                </div>

                <div className='back_img_8'>
                    {/* <img className='back_img_8' src={back_8} alt=''/> */}
                </div>
            </div>
            

        </div>

    )
}