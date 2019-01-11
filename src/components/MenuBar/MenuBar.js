import React, {Component} from 'react';
import logo from './../../media/Slice.svg';
import {Link} from 'react-router-dom';

export default class MenuBar extends Component {

    login() {
        let {REACT_APP_DOMAIN, 
            REACT_APP_CLIENT_ID} = process.env;

        let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`
        
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
    }

    




    render() {
        return (
            <div  >
                <div className='menu-container'>

                    <div className='menuLogo'>
                        <object type='image/svg+xml' data={logo} id='logo' src={logo} alt='cyn of utah logo'>
                        </object>
                        
                    </div>
                    <div className='listContainer'>
                        <ul className='nav' >
                            <li ><Link id='link' style={{textDecoration: 'none'}} to='/'>HOME</Link></li> 
                            <li ><Link id='link' style={{textDecoration: 'none'}} to='/hs'>HS EVENT</Link></li> 
                            {/* <li ><Link id='link' style={{textDecoration: 'none'}} to='/jh'>JH EVENT</Link></li> */}
                            <li ><Link id='link' style={{textDecoration: 'none'}} to='/newsfeed'>NEWS</Link></li>
                            <li ><Link id='link' to='/registration' style={{textDecoration: 'none'}}>REGISTRATION</Link></li> 
                        </ul>
                    </div>
                    <div className='barShape' >
                    </div>
                </div>
                
            

            </div>




        )
    }
}