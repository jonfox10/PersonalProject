import React, {Component} from 'react';
import fallFlingScreenshot from './../../media/FallFlingPromoScreenShot.png'
import fallFlingPromo from './../../media/FallFlingPromo.mp4'


export default class VideoHS extends Component {
    render(){
        
        return(
            <div className='videoStyle'>
                <div className='videoOverlay'></div>
                <video poster={fallFlingScreenshot} autoPlay={true} loop muted>
                    <source src={fallFlingPromo} type='video/mp4'/>
                </video>
            </div>
        )

    }
}