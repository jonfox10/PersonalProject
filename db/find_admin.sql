SELECT * 
FROM group_leader 
WHERE leader_type = 'admin' AND leader_auth_id = $1;