CREATE TABLE hs_group_info_2018 (
    group_id SERIAL PRIMARY KEY,
    group_name VARCHAR(200),
    group_leader_name VARCHAR(180),
    group_leader_email VARCHAR(200),
    group_leader_phone VARCHAR(12),
    group_size INTEGER, 
    leader_id INTEGER REFERENCES group_leader(leader_id),
    leader_phone VARCHAR(12)
);