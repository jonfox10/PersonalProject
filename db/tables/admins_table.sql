CREATE TABLE admins (
    admin_id SERIAL PRIMARY KEY,
    admin_name VARCHAR(180),
    admin_auth_id TEXT,
    admin_picture TEXT,
    admin_email VARCHAR(200)
);