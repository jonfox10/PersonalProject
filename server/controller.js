require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    } 
});

module.exports = {
    createJhRegistration: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {group_name, group_leader_name, group_leader_email, group_leader_phone, group_size} = req.body;
        dbInstance.create_jh_group([group_name, group_leader_name, group_leader_email, group_leader_phone, group_size])
        .then( (response) => {
            res.sendStatus(200);
            console.log(response)
        })
        .catch( (err) => {
            res.sendStatus(500);
            console.log(err);
        })
    },

    createHsRegistration: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {group_name, group_leader_name, group_leader_email, group_leader_phone, group_size} = req.body;
        let mailOptions = {
            from: ' "CYN WEBSITE" <jonfuchs45@gmail.com>',
            to: `${group_leader_email}`,
            subject: 'Thanks for RSVPing to the HS FALL FLING EVENT',
            html: `<b style="font-family:verdana;
            color:navy;">
                    <h4 style="font-size: 200%"> Hi ${group_leader_name}, </h4> 
                    <p style="font-size: 120%">Thanks so much for letting us know that you are bringing ${group_size} poeople to our fall fling event. We are looking forward to seeing you soon!</p>
                    <p style="font-size: 120%"> Here are a few more details to help your night go as smooth as possible. 
                    <p style="font-size: 120%"> Registration opens at 9:00pm at The Rising Church and the event officially kicks-off at 9:30pm.</p>
                    <p style="font-size: 120%"> The program at The Rising Church ends shortly after 11:30pm at which time groups will be dismissed to travel to Classic Skating & Fun Center for the afterparty, which lasts till 4am. Directions to the Classic Fun Center can be found below. *Please note; you must attend the program at The Rising in order to attend the afterparty at Classic Skating.</p>
                    <p style="font-size: 120%; font-weight: bold"> Ideas for what to do after the event ends at 4am? </p>
                    <p style="font-size: 120%"> If you aren’t in a rush to head back to your church for student pick-up, its become a tradition among many youth groups to head out for a late-night breakfast at one of the many diners open all night. We recommend calling your diner/restaurant in advance to let them know you’ll be coming with a larger group!</p>
                    <p style="font-size: 120%"> We are excited to see you soon!</p>
                    <p style="font-size: 120%"> The CYN team</p>
                    </b>`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
         });
        dbInstance.create_hs_group([group_name, group_leader_name, group_leader_email, group_leader_phone, group_size])
        .then((response) => {
            res.sendStatus(200);
            console.log(response)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })
    },
    
    readJhGroups: (req, res, next) => {
        req.app.get('db').read_jh_groups()
        .then(jh_group_info_2019_table => {
            res.status(200).send(jh_group_info_2019_table)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })
    },

    readHsGroups: (req, res, next) => {
        req.app.get('db').read_hs_groups()
        .then(hs_group_info_2018_table => {
            res.status(200).send(hs_group_info_2018_table)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })
    },

    createPost: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {post_title, post_content, post_picture} = req.body;
        dbInstance.create_post([post_title, post_content, post_picture])
        .then((response) => {
            res.sendStatus(200);
            console.log(response)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err)
        })
    },

    getAll: (req, res, next) => {
       req.app.get('db').read_posts()
        .then( posts => {
            res.status(200).send(posts)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })

    },

    deleteOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;
        dbInstance.delete_post(params.id)
        .then( (posts) => {
            res.status(200).send(posts)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {post_id, post_title, post_content} = req.body; 
        dbInstance.update_post([post_id, post_title, post_content])
        .then((posts) => {
            res.status(200).send(posts)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log (err);
        })
    },
    createLeader: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {leader_name, leader_email, leader_phone, group_name} = req.body;
        dbInstance.create_post([leader_name, leader_email, leader_phone, group_name])
        .then((response) => {
            res.sendStatus(200);
            console.log(response)
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log(err)
        })
    }    
}

// update: (req, res, next) => {
//     const dbInstance = req.app.get('db');
//     const {post_title, post_content} = req.body; 
//     const {params} = req;
//     dbInstance.update_post([params.id, post_title, post_content])
//     .then((posts) => {
//         res.status(200).send(posts)
//     })
//     .catch((err) => {
//         res.sendStatus(500);
//         console.log (err);
//     })
// }   