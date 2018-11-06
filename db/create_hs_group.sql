INSERT INTO hs_group_info_2018 (group_name, group_leader_name, group_leader_email, group_leader_phone, group_size)
VALUES ($1, $2, $3, $4, $5);

INSERT INTO group_leader
(group_name, leader_name, leader_email, leader_phone)
VALUES
($1, $2, $3, $4);

-- INSERT INTO group_leader
-- ()