// require in dependencies
require('dotenv').config();
const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
const axios = require('axios')
const massive = require('massive')
const controller = require('./controller')
 



// initialize express app
const app = express();


//destructure from process.env
const {
    SERVER_PORT,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING,
    SECRET,
    AUTH_PROTOCAL,
    REACT_APP_LOGOUT 
} = process.env;

//connect to DB

// massive(CONNECTION_STRING).then( db => app.set('db', db))

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('connected to the db')
})
.catch((err) => {
    console.log(err)
})
//middleware
app.use(bodyParser.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))




///////////////////////// below is to do auth login by pass //////////////
// let authBypass = async (req,res,next) => {
//     if (process.env.NODE_ENV){
//         const db = req.app.get('db');
//         let user = db.session_user();
//         req.session.user = user[0]
//         next();
//     } else {
//         next();
//     }
// }
  

//endpoints
//user login endpoint
app.get('/auth/callback', async (req, res) => {
    // get code from req.query.code
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: AUTH_PROTOCAL
    }
    // post request with code for token
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
    // use token to get user data
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)

    
    let {email, picture, sub, name} = userRes.data; 

    // //check if the user already exists in our db
    const db = app.get('db');  
    let foundLeader = await db.find_group_leader([sub]);
    // console.log('test')
    if (foundLeader[0]) {
       // found user existing in the db, put returned user on session  
        req.session.user = foundLeader[0];
    } else {
        // no user was found by that google id. create new user in db
        let createdLeader = await db.create_group_leader([name, sub, picture, email])
        req.session.user = createdLeader[0];
    } 
    res.redirect('/#/registration')
})

//admin login endpoint
app.get('/auth/callback/admin', async (req, res) => {
    // get code from req.query.code
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    // post request with code for token
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
    // use token to get user data
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)

    
    let {email, picture, sub, name, type} = userRes.data; 

    // //check if the user already exists in our db
    const db = app.get('db');  
    let foundAdmin = await db.find_admin([sub]);
    // console.log('test')
    if (foundAdmin[0]) {
       // found user existing in the db, put returned user on session  
        req.session.user = foundAdmin[0];
    } else {
        // no admin was found by that google id. :(
        res.status(401).send('Sorry, not an admin.')
    } 
    res.redirect('/#/admin')
})


app.get('/api/user-data', (req, res) => {
    if(req.session.user) {
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send('No, please log in!')
    }
})


///////////////////////// below is to do auth login by pass //////////////
// app.get('/api/user-data', authBypass, (req, res) => {
//     if(req.session.user) {
//         res.status(200).send(req.session.user);
//     } else {
//         res.status(401).send('No, please log in!')
//     }
// })

app.get('/auth/logout', (req, res) => {
    req.session.destroy();
    // res.redirect('http://localhost:3000/#/')
})

app.post('/api/registration/hs', controller.createHsRegistration);
app.post('/api/registration/jh', controller.createJhRegistration);
app.get('/api/registration/hs', controller.readHsGroups);
app.get('/api/registration/jh', controller.readJhGroups);
app.post('/api/posts', controller.createPost)
app.get('/api/posts', controller.getAll)
app.delete('/api/posts/:id', controller.deleteOne)
app.put('/api/posts/', controller.update)



//listen
app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`) )