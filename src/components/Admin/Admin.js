import React, {Component} from 'react';
import axios from 'axios';
import {updateUser} from './../../ducks/user_reducer'
import {connect} from 'react-redux';
import cloneDeep from 'lodash/cloneDeep'
import Groups from './../Groups/Groups'
import leaderPic from './../../media/leader_picBW.jpg'
import Footer from './../Footer/Footer'

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

    //this is not working properly//
    async componentDidMount(){
        let userRes = await axios.get('/api/user-data');
        this.props.updateUser(userRes.data)
        
        let postRes = await axios.get('/api/posts');
        this.setState({currentPosts: postRes.data})
    }

    // async componentDidMount(){
    //     let res = await axios.get('/api/posts');
    //     this.setState({currentPosts: res.data})
    // }


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


    render() {
        let current_posts = this.state.currentPosts.map((post, index) => {
            return (
            <div 
                className='currentPosts'
                id={post.post_id}
                key={post.post_id}>
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
                        style={{marginLeft: '5.55vw'}}
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

                            leader_type ? (

                                <div className='accountInfo'>
                                    <p>ADMIN ACCOUNT: <br/>
                                    {leader_name} </p>
                                    <div>
                                        <img id='profilePic' src={leader_picture} alt='profile'/>
                                    </div>
                                    <div>
                                        <a href={process.env.REACT_APP_LOGOUT}>
                                        <button className='logoutBtn' >LOGOUT</button>
                                        </a>
                                    </div> 
                                </div>
                            ) : (
                                <div className='accountInfo'>
                                    <p>If you are an admin, please log in.</p>
            
                                    <a href={process.env.REACT_APP_LOGOUT}>
                                    <button className='logoutBtn' >LOGOUT</button>
                                    </a>
                                
                                </div>

                            )

                        }   
                    </div>
                    <div>
                        <form className='newForm'
                        onSubmit={this.handleSubmit}>
                        <h3>NEW POST TO NEWSFEED PAGE</h3> 
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
                                value={this.state.post_content}
                                onChange={this.handleInputChange}
                                placeholder='Post Content...'/>

                        <input type="submit" value="Submit" className='formBtn'/>
                        </form>
                    </div>


                
                    <div>
                        {current_posts}
                    </div>
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