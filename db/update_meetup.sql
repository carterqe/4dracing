UPDATE meetups
SET title = $1,
    description = $2,
    image = $3
WHERE meetup_id = $4
RETURNING *;
