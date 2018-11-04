import React, {Component} from 'react';
import axios from 'axios';
import newsPic from './../../media/springfling.jpg'

class Newsfeed extends Component {
    constructor(props){
        super(props)

        this.state = {currentPosts: [] }    
    }

    async componentDidMount(){
        let res = await axios.get('/api/posts');
        this.setState({currentPosts: res.data})
        console.log(this.state)
        console.log(this.state.currentPosts)
        console.log(this.state.currentPosts[0].post_title);
    }

    

    render() {
            

            let posts = this.state.currentPosts.map((post, index) => {
                return (
                <div className='newsPost'
                key={`posts${index}`}>
                    <h4 className='newsTitle'>{post.post_title}</h4>
                    {/* <hr className='newsLine' /> */}
                    {/* <p>POST #: {post.post_id}</p> */}
                    <p className='newsPostP' style={{whiteSpace: "pre-wrap"}}>{post.post_content}</p>
                </div>
                )
            })
        

        return (
            <div>
                <div className='imageStyle'>
                    <img src={newsPic} alt='CYN Leaders'/>
        
                </div>
                <div className='newsHeader'>
                    <h1 id='newsHeader'>NEWS</h1>
                </div>
                <div className='newsBody'>
                {posts}
                </div>
            </div>

        )
    }
}

export default Newsfeed;