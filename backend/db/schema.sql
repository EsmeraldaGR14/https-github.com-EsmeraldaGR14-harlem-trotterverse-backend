DROP DATABASE IF EXISTS globe_trotter_dev;

CREATE DATABASE globe_trotter_dev;

\c globe_trotter_dev;

CREATE TABLE active_roster (
    id SERIAL PRIMARY KEY,
    position TEXT NOT NULL, 
    height TEXT NOT NULL, 
    nickname TEXT,
    lastname TEXT NOT NULL,
    hometown TEXT,
    almamater TEXT,
    jersey_number INTEGER, 
    bio TEXT, 
    career_highlights TEXT,
    career_history TEXT,
    favorite_quote TEXT,
    hobbies TEXT
);

