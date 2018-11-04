CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    post_title VARCHAR(100),
    post_content TEXT,
    post_picture TEXT,
    post_author_id INTEGER REFERENCES admins(admin_id)
);