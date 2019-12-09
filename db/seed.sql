CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
  is_admin BOOLEAN default false,
  username VARCHAR(120),
  hash text
  );

  CREATE TABLE users_hash (
	hash_id SERIAL PRIMARY KEY,
	hash TEXT,
	user_id INT REFERENCES users(user_id)
);

CREATE TABLE posts (
	post_id SERIAL PRIMARY KEY,
	img_url TEXT,
	content TEXT,
	user_id INT REFERENCES users(user_id)
);

CREATE TABLE meetups (
	meetup_id SERIAL PRIMARY KEY,
	title VARCHAR,
	description VARCHAR,
	image TEXT,
	user_id INT REFERENCES users(user_id)
);