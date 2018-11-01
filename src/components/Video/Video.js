import React, {Component} from 'react';
import fallFlingPromo from './../../media/FallFlingPromo.mp4'
import fallFlingScreenshot from './../../media/FallFlingPromoScreenShot.png'



export default class Video extends Component {
    render(){
        
        
        return(
            <div className='videoStyle'>
                <video poster={fallFlingScreenshot} autoPlay={true} loop muted>
                    <source src={fallFlingPromo} type='video/mp4'/>
                </video>
            </div>
        )

    }
}