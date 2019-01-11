import React, {Component} from 'react';
import fallFlingScreenshot from './../../media/pproject_files/pproject_10.jpg'
import heroVideo from './../../media/pproject_backslides.mp4'


export default class Video extends Component {
    render(){
        
        
        return(
            <div className='videoStyle'>
                {/* <div className='videoOverlay'></div> */}
                <video poster={fallFlingScreenshot} autoPlay={true} loop muted>
                    <source id='videoSource' src={heroVideo} type='video/mp4' />
                </video>
            </div>
        )

    }
}
