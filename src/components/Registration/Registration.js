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
                groupName: '',
                groupLeader: '',
                leaderEmail: '',
                leaderPhone: '',
                attendanceEstimate: 0,
                emailUpdates: false,
                textUpdates: false
        }
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
        console.log(this.state);
    }
    handleSelect = (event) => {
        this.setState({whichEvent: event.target.value});
    }
    handleAttendence = (event) => {
        this.setState({attendanceEstimate: event.target.value})
    }

    submitHandler = (event) => {
        console.log(this.state);
        if(this.state.whichEvent === 'jhEvent'){
            axios.post('/api/registration/jh', this.state)
        } 
        if(this.state.whichEvent === 'hsEvent'){
            axios.post('/api/registration/hs', this.state)
        }

    }

    handleCancel = (event) => {
        this.setState({
            whichEvent: '',
            groupName: '',
            groupLeader: '',
            leaderEmail: '',
            leaderPhone: '',
            attendanceEstimate: 0,
            emailUpdates: false,
            textUpdates: false
        })
        
    }

    render() {

        return (
            <div>
                <div className='regImage'>
                    <img src={regPic} alt='CYN Leaders'/>
        
                </div>
                <div className='regHeader'>
                    <h1 id='regHeader'>RSVP</h1>
                </div>
                <div className='regBody'>
                    <form className='newReg' >

                        <label> SELECT THE EVENT: 
                            <select 
                            className='valueSelector'
                            value={this.state.whichEvent} 
                            onChange={this.handleSelect}>
                                <option value="hsEvent">HS Fall Event</option>
                                <option value="jhEvent">JH Spring Event</option>
                            </select>
                        </label>
                        <input 
                            className='regInput'
                            name='groupName'
                            type='text'
                            value={this.state.groupName}
                            onChange={this.handleInputChange}
                            placeholder='Group Name...'/>
                        <input 
                            className='regInput'
                            name='groupLeader'
                            type='text'
                            value={this.state.groupLeader}
                            onChange={this.handleInputChange}
                            placeholder="Leader of Group..."/>
                        <input 
                            className='regInput'
                            name='leaderEmail'
                            type='text'
                            value={this.state.leaderEmail}
                            onChange={this.handleInputChange}
                            placeholder="Group Leader's email..."/>   
                        <input 
                            className='regInput'
                            name='leaderPhone'
                            type='text'
                            value={this.state.leaderPhone}
                            onChange={this.handleInputChange}
                            placeholder="Group Leader's cell#..."/>
                        <input 
                            className='regInput'
                            name='attendanceEstimate'
                            type='number'
                            value={this.state.attendanceEstimate}
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
                        onClick={this.submitHandler} 
                        >SUBMIT</button>

                        {/* <a href='http://localhost:6000/auth/logout'>
                        <button>LOGOUT</button>
                    </a> */}
                        <button 
                        className='formBtn'
                        onClick={this.handleCancel}>CLEAR FORM</button>
                        </div>
                    </form>

                    <div style={{margin: '2vw', display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'center'}}>
                        <Link to='/hs' style={{textDecoration: 'none'}}><div className='detailsLink'>
                        <p>HS FALL FLING DETAILS AND RESOURCES</p>
                        </div></Link>
                        <Link to='/jh' style={{textDecoration: 'none'}}><div className='detailsLink'>
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