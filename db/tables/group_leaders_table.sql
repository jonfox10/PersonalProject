CREATE TABLE group_leader (
    leader_id SERIAL PRIMARY KEY,
    leader_name VARCHAR(180),
    leader_auth_id TEXT,
    leader_picture TEXT,
    leader_email VARCHAR(200),
    leader_type VARCHAR(5),
    group_name VARCHAR(200)
);