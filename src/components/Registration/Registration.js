import React, {Component} from 'react';
import axios from 'axios'
// import {updateUser} from './../../ducks/user_reducer';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom'


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
            <div style={{paddingTop: '500px', height:'2000px', background: `url(media1) no-repeat center fixed`, backgroundSize: 'cover' }}> 
                {/* <img src={media1} alt='spring fling 2018'/> */}
                <div>

                    <h1 style={{textAlign: 'center'}}>REGISTRATION</h1>
                </div>
                
                <div>
                    <form style={{padding: '20px', margin: 'auto', backgroundColor: '#c4c4c4', width: '90%', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>

                        <label> SELECT THE EVENT: 
                            <select value={this.state.whichEvent} onChange={this.handleSelect}>
                                <option value="hsEvent">HS Fall Event</option>
                                <option value="jhEvent">JH Spring Event</option>
                            </select>
                        </label>
                        <input 
                            name='groupName'
                            type='text'
                            style={{width: '400px', borderRadius: '10px', margin: '20px', padding: '10px'}}
                            value={this.state.groupName}
                            onChange={this.handleInputChange}
                            placeholder='Group Name...'/>
                        <input 
                            name='groupLeader'
                            type='text'
                            style={{width: '400px', borderRadius: '10px', margin: '20px', padding: '10px'}}
                            value={this.state.groupLeader}
                            onChange={this.handleInputChange}
                            placeholder="Leader of Group..."/>
                        <input 
                            name='leaderEmail'
                            type='text'
                            style={{width: '400px', borderRadius: '10px', margin: '20px', padding: '10px'}}
                            value={this.state.leaderEmail}
                            onChange={this.handleInputChange}
                            placeholder="Group Leader's email..."/>   
                        <input 
                            name='leaderPhone'
                            type='text'
                            style={{width: '400px', borderRadius: '10px', margin: '20px', padding: '10px'}}
                            value={this.state.leaderPhone}
                            onChange={this.handleInputChange}
                            placeholder="Group Leader's cell#..."/>
                        <input 
                            name='attendanceEstimate'
                            type='number'
                            style={{width: '400px', borderRadius: '10px', margin: '20px', padding: '10px'}}
                            value={this.state.attendanceEstimate}
                            onChange={this.handleAttendence}
                            placeholder="0"/>
                        
                        
                        <div>
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
                        </div>  

                        <button
                        onClick={this.submitHandler} 
                        >SUBMIT</button>

                        <a href='http://localhost:6000/auth/logout'>
                        <button>LOGOUT</button>
                        </a>
                        <button onClick={this.handleCancel}>CLEAR FORM</button>
                    </form>
               </div>
                    <div style={{margin: '20px', display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'center'}}>
                        <Link to='/hs'><div style={{backgroundColor: '#c4c4c4', borderRadius: '10%', width: '250px', height: '250px', textAlign: 'center', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', margin: '20px', display: 'grid', placeItems: 'center', textDecoration: 'null'}}>
                        <p>HS FALL FLING DETAILS AND RESOURCES</p>
                        </div>
                        </Link>
                        <Link to='/jh'><div style={{backgroundColor: '#c4c4c4', borderRadius: '10%', width: '250px', height: '250px', textAlign: 'center', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', margin: '20px', display: 'grid', placeItems: 'center'}}>
                        JH SPRING FLING DETAILS AND RESOURCES
                        </div>
                        </Link>
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