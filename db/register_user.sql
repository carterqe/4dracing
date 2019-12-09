INSERT INTO users
(is_admin, username)
VALUES
($1, $2)
RETURNING *;