import React, {Component} from 'react';
import fallFlingScreenshot from './../../media/FallFlingPromoScreenShot.png'
import heroVideo from './../../media/pproject_backslides.mp4'
import fallFlingPromo from './../../media/FallFlingPromo.mp4'


export default class Video extends Component {
    render(){
        
        
        return(
            <div className='videoStyle'>
                <div className='videoOverlay'></div>
                <video poster={fallFlingScreenshot} autoPlay={true} loop muted>
                    <source src={heroVideo} type='video/mp4'/>
                </video>
            </div>
        )

    }
}
