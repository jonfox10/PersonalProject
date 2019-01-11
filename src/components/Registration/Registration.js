import React, {Component} from 'react';
import axios from 'axios'
// import {updateUser} from './../../ducks/user_reducer';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import regPic from './../../media/pproject_files/pproject_11.jpg'



class Registration extends Component {
    constructor(){
        super()

        this.state = {
                whichEvent: '',
                group_name: '',
                group_leader_name: '',
                group_leader_email: '',
                group_leader_phone: '',
                group_size: 0,
                emailUpdates: false,
                textUpdates: false
        }
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
        console.log(this.state);
    }
    handleSelect = (event) => {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }
    handleAttendence = (event) => {
        this.setState({group_size: event.target.value});
        console.log(this.state);
    }

    submitHandler = (event) => {
        console.log(this.state);

        if(this.state.whichEvent === 'jhEvent'){
            axios.post('/api/registration/jh', this.state).then(response => {
                this.setState({
                    whichEvent: '',
                    group_name: '',
                    group_leader_name: '',
                    group_leader_email: '',
                    group_leader_phone: '',
                    group_size: 0,
                    emailUpdates: false,
                    textUpdates: false
                })
            })
        } 
        if(this.state.whichEvent === 'hsEvent'){
            axios.post('/api/registration/hs', this.state).then(response => {
                this.setState({
                    whichEvent: '',
                    group_name: '',
                    group_leader_name: '',
                    group_leader_email: '',
                    group_leader_phone: '',
                    group_size: 0,
                    emailUpdates: false,
                    textUpdates: false
                })
            })
        }

    }

    handleCancel = (event) => {
        this.setState({
            whichEvent: '',
            group_name: '',
            group_leader_name: '',
            group_leader_email: '',
            group_leader_phone: '',
            group_size: 0,
            emailUpdates: false,
            textUpdates: false
        })
        
    }

    render() {

        return (
            <div className='regPage'>
                <div className='regImage'>
                    <img src={regPic} alt='CYN Leaders'/>
        
                </div>
                <div className='regHeader'>
                    <h1 id='regHeader'>RSVP</h1>
                </div>
                <div className='regBody'>
                    
                    <div className='rsvp_header'>
                        <h3>RSVP FOR AN EVENT...</h3>
                    </div>
                    <form className='newReg' >

                        <label style={{fontSize: '2vw'}}> SELECT THE EVENT: 
                            <select 
                            className='valueSelector'
                            value={this.state.whichEvent}name='whichEvent' 
                            placeholder='select an event'
                            onChange={this.handleSelect}>
                                <option value=''></option>
                                <option value="hsEvent">HS Fall Event</option>

                                <option value="jhEvent">JH Spring Event</option>
                            </select>
                        </label>
                        <input 
                            className='regInput'
                            name='group_name'
                            type='text'
                            value={this.state.group_name}
                            onChange={this.handleInputChange}
                            placeholder='Group Name...'/>
                        <input 
                            className='regInput'
                            name='group_leader_name'
                            type='text'
                            value={this.state.group_leader_name}
                            onChange={this.handleInputChange}
                            placeholder="Leader of Group..."/>
                        <input 
                            className='regInput'
                            name='group_leader_email'
                            type='text'
                            value={this.state.group_leader_email}
                            onChange={this.handleInputChange}
                            placeholder="Group Leader's email..."/>   
                        <input 
                            className='regInput'
                            name='group_leader_phone'
                            type='text'
                            value={this.state.group_leader_phone}
                            onChange={this.handleInputChange}
                            placeholder="Group Leader's cell#..."/>
                        <input 
                            className='regInput'
                            name='group_size'
                            type='number'
                            value={this.state.group_size}
                            onChange={this.handleAttendence}
                            placeholder="0"/>
                        
                        
                        {/* <div>
                            <label>RECIEVE EMAIL UPDATES:</label>
                            <input 
                                name='hsEvent'
                                type='checkbox'
                                checked={this.state.emailUpdates}
                                onChange={this.handleInputChange}/>
                            <label>RECIEVE TEXT UPDATES:</label>
                            <input 
                                name='jhEvent'
                                type='checkbox'
                                checked={this.state.textUpdates}
                                onChange={this.handleInputChange}/>    
                        </div>   */}
                        <div className='btnContainer'>
                            <button
                            className='formBtn'
                            id='submitBtn'
                            onClick={this.submitHandler} 
                            >SUBMIT</button>

                            {/* <a href='http://localhost:6000/auth/logout'>
                            <button>LOGOUT</button>
                        </a> */}
                            <button 
                            className='formBtn'
                            id='clearBtn'
                            onClick={this.handleCancel}>CLEAR FORM</button>
                        </div>
                    </form>

                    <div style={{margin: '2vw', display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'center'}}>
                        <Link to='/hs' style={{textDecoration: 'none'}}><div className='detailsLinkLeft'>
                        <p>HS FALL FLING DETAILS AND RESOURCES</p>
                        </div></Link>
                        <Link to='' style={{textDecoration: 'none'}}><div className='detailsLinkRight'>
                        JH SPRING FLING DETAILS AND RESOURCES
                        </div>
                        </Link>
                    </div>
               </div>
            </div>



        )
    }
}


export default Registration;

// const mapStateToProps = state => {
//     return {
//         user: state.user    
//     }
// }

// export default connect(mapStateToProps, {updateUser})(Registration);