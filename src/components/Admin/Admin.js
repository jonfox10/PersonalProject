import React, {Component} from 'react';
import axios from 'axios';
import {updateUser} from './../../ducks/user_reducer'
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep'
import Groups from './../Groups/Groups'
import leaderPic from './../../media/pproject_files/pproject_7.jpg'

class Admin extends Component {
    constructor(){
        super()

        this.state = {
            post_title: '',
            post_content: '',
            post_picture: '',
            currentPosts: [],
            post_title_edit: '',
            post_content_edit: '',
            post_picture_edit: ''
        }

    }

    
    async componentDidMount(){
        let userRes = await axios.get('/api/user-data');
        this.props.updateUser(userRes.data)
        console.log(userRes.data);
        let postRes = await axios.get('/api/posts');
        this.setState({currentPosts: postRes.data})
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
        
    }

    handleSubmit = (event) => { 
        event.preventDefault()
        axios.post('/api/posts', this.state)
    }
    
    handleDelete = (id) => {
        axios.delete(`/api/posts/${id}`)
        .then(response => {
            console.log(response.data);
            this.setState({currentPosts: response.data});
        })
        console.log('clicked')
    }
    
    handleEditChange = (index, value, property, id) => {
        let copy = cloneDeep(this.state.currentPosts)
        copy[index][property] = value;
        this.setState({currentPosts: copy})
        console.log(copy);
        console.log(this.state);
    }

    handleEdit = (id) => {
        let {currentPosts} = this.state;
        let thePost = currentPosts.find((post) => post.post_id === id)
        console.log();
        axios.put(`/api/posts`, thePost)
        .then(response => {
            console.log(response.data);
            this.setState({currentPosts: response.data})
        })

    }

    handleLogout = () => {
        let uri = encodeURIComponent(window.location.origin);
        console.log(uri);
        let logoutUrl = `https://${process.env.REACT_APP_DOMAIN}/v2/logout?returnTo=${uri}`;
        console.log(logoutUrl);
        axios.get('/auth/logout')
        .then(() => {
            window.location = logoutUrl;
        })
    }

    // handleLogout = () => {
    //     axios.get('/auth/logout')
    //     .then( res => {this.props.setState({user: {}})})
    //     this.props.history.push('/')
    // }
    render() {
        let current_posts = this.state.currentPosts.map((post, index) => {
            return (
            <div 
                className='currentPosts'
                id={post.post_id}
                key={post.post_id}>
                <div className='editorTitle'>
                    <h3 style={{color: 'whitesmoke'}}>EDIT POST</h3>
                </div>
                <div className='editMain'>
                    <div className='editHeading'>
                        <h3>POST: {post.post_id} </h3> 
                        <button 
                        className='editBtn' 
                        onClick={ () => {this.handleDelete(post.post_id)}}>
                        DELETE POST
                        </button>
                        <button
                        className='editBtn'  
                        onClick={ () => {this.handleEdit(post.post_id)}}>
                        SAVE CHANGES
                        </button>
                    </div>
                    <hr/>
                    <div className='editBody'>
                        <h3>TITLE:</h3>
                        <input 
                            type='text'
                            className='editTitle'
                            // style={{marginLeft: '5.55vw'}}
                            value={post.post_title}
                            // name='post.post_title'
                            onChange={(e) => 
                                {this.handleEditChange(index, e.target.value, 'post_title', post.post_id)}}
                        />
                        
                        {/* <p>POST CONTENT: {post.post_content}</p> */}
                        <h3>CONTENT:</h3>
                        <textarea 
                            // name='post.post_content'

                            type='text'
                            className='editContent'
                            value={post.post_content}
                            onChange={(e) => 
                                {this.handleEditChange(index, e.target.value, 'post_content', post.post_id)}} 
                        />
                    </div>
                </div>
                
            </div>
            )
        })

        let {leader_type, leader_name, leader_picture} = this.props.user;



        return (
            <div >
                <div className='imageStyle'>
                    <img src={leaderPic} alt='CYN Leaders'/>
        
                </div>
                <div className='adminHeader'>
                    <h1 id='adminHeader'>ADMIN PAGE</h1>
                </div>
                <div className='adminBody'>
                    <div >
                        {

                            leader_type === 'admin' ? (

                                <div className='accountInfo'>
                                    <p>ADMIN ACCOUNT: <br/>
                                    {leader_name} </p>
                                    <div>
                                        <img id='profilePic' src={leader_picture} alt='profile'/>
                                    </div>
                                    <div>
                                        <button className='logoutBtn' onClick={this.handleLogout} >LOGOUT</button>
                                    </div> 
                                </div>
                            ) : (
                                <div className='accountInfo'>
                                    <p>You are not logged in to an admin account Please click log out try again with a different acount, or contact the site manager.</p>
            
                                    
                                    <button className='logoutBtn' onClick={this.handleLogout} >LOGOUT</button>
                                    
                                
                                </div>

                            )

                        }   
                    </div>
                        {
                            leader_type === 'admin' ? (
                                <div>
                        
                                    <form className='newForm'
                                    onSubmit={this.handleSubmit}>
                                    <h3 className='newForm_heading'>NEW POST TO NEWSFEED PAGE</h3> 
                                    <div className='newForm_body'>
                                        <input 
                                                name='post_title'
                                                className='titleInput'
                                                type='text'
                                                value={this.state.post_title}
                                                onChange={this.handleInputChange}
                                                placeholder='Post Title...'/>
                                        <textarea 
                                                name='post_content'
                                                className='textArea'
                                                type='text'
                                                // rows="10" cols="50"
                                                wrap='hard'
                                                value={this.state.post_content}
                                                onChange={this.handleInputChange}
                                                placeholder='Post Content...'/>

                                        <input type="submit" value="Submit" className='formBtn'/>
                                    </div>
                                    </form>

                                    <div>
                                        {current_posts}
                                    </div>
                                </div>

                            ) : (
                                <div>
                                    <img style={{width: '40vw', height: '40vw', borderRadius: '50%', border: '12px double red', margin: '5vw', }}src='https://media2.giphy.com/media/fR12yitnG7P5S/giphy.webp?cid=3640f6095bdcceeb34394c5641ca6486'/>
                                    
                                </div>
                            )
                        }
                </div>
                <div>
                   {/* <Groups /> */}
                </div>

                {/* <Footer /> */}
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {updateUser})(Admin);