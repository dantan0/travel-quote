DROP TABLE IF EXISTS quotes CASCADE;
DROP TABLE IF EXISTS persons CASCADE;

-- CREATE TABLE persons (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   email VARCHAR(50) NOT NULL
-- );

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(50) NOT NULL,
  -- person_id INTEGER REFERENCES persons(id) ON DELETE CASCADE,
  from_city VARCHAR(50) NOT NULL,
  to_city VARCHAR(50) NOT NULL,
  depart_date DATE NOT NULL,
  return_date DATE NOT NULL,
  transportation VARCHAR(50) NOT NULL,
  people INTEGER NOT NULL,
  price DECIMAL NOT NULL,
  trip_message VARCHAR(255),
  trip_status VARCHAR(50),
  begin_date DATE NOT NULL,
  close_date DATE
);