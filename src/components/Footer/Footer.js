import React, {Component} from 'react';
import logo from './../../media/Slice.svg';


export default class Footer extends Component {

    adminLogin() {
        let {REACT_APP_DOMAIN, 
            REACT_APP_CLIENT_ID} = process.env;

        let uri = `${encodeURIComponent(window.location.origin)}/auth/callback/admin`
        
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
    }

    render() {
        return (
            <div>
                <div className='footer' >
                    <div  
                        className='footerLogo'>
                        <object type='image/svg+xml' data={logo} id='footerLogo' src={logo} alt='cyn of utah logo'>
                        </object>
                    </div>
                    <div className='btnContainer'>
                        <button className="footerBtn" onClick={this.adminLogin}>ADMIN</button>
                    </div>
                    <div className='footerBarShape' >
                    </div>
                </div>

            </div>





        )
    }    
}