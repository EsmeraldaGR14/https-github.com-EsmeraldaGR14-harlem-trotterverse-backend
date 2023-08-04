DROP DATABASE IF EXISTS globe_trotter_dev;

CREATE DATABASE globe_trotter_dev;

\c globe_trotter_dev;

CREATE TABLE active_roster (
    id SERIAL PRIMARY KEY,
    position , 
    height, 
    nickname, 
    hometown,
    almamater,
    jersey number, 
    bio, 
    career highlights,
    career history,
    favorite_quote,
    hobbies,
)

