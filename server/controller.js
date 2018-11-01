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