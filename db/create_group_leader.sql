INSERT INTO group_leader 
(leader_name, leader_auth_id, leader_picture, leader_email)
VALUES
($1, $2, $3, $4)
RETURNING *;