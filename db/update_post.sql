UPDATE posts
SET (post_title, post_content) = ($2, $3)
WHERE post_id = $1;

SELECT * 
FROM posts;