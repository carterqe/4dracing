INSERT INTO users
(username, id)
VALUES
($1, $2);

SELECT * FROM users
WHERE id = $2;