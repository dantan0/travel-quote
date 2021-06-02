INSERT INTO persons (name, email)
VALUES('Jane Smith', 'janesmith@gmail.com');

INSERT INTO persons (name, email)
VALUES ('Jerry Ho', 'jerryho@gmail.com');

INSERT INTO persons (name, email)
VALUES ('Fan Oliver', 'fanoliver@gmail.com');

INSERT INTO persons (name, email)
VALUES ('Olivia Doe', 'oliviadoe@hotmail.com');

INSERT INTO persons (name, email)
VALUES ('Tanner Wang', 'tanner@gmail.com');

INSERT INTO persons (name, email)
VALUES ('Alice Zinger', 'alicezinger@gmail.com');

INSERT INTO persons (name, email)
VALUES ('Tom Solo', 'tomsolo@gmail.com');

INSERT INTO quotes (from_city, to_city, depart_date, return_date, transportation, price, trip_message, trip_status, begin_date, person_id)
VALUES('Calgary', 'Hawaii', '2021-07-02', '2021-07-10', 'airplane', 1000, 'Looking for a sunny beach trip', 'pending', '2021-03-10', 1);

INSERT INTO quotes (from_city, to_city, depart_date, return_date, transportation, price, trip_message, trip_status, begin_date, person_id)
VALUES('Calgary', 'Hawaii', '2021-07-02', '2021-07-10', 'airplane', 1000, 'Hawaii getaway is so cool!', 'pending', '2021-04-08', 2);

INSERT INTO quotes (from_city, to_city, depart_date, return_date, transportation, price, trip_message, trip_status, begin_date, close_date, person_id)
VALUES ('Vancouver', 'Calgary', '2021-07-02', '2021-07-10', 'tour bus', 4000, 'cannot wait to do a scenic road trip', 'closed', '2021-04-04', '2021-04-08', 3);

INSERT INTO quotes (from_city, to_city, depart_date, return_date, transportation, price, trip_message, trip_status, begin_date, person_id)
VALUES ('Seattle', 'Venice', '2021-09-10', '2021-09-25', 'cruise ship', 9000, 'time for a classic italian trip', 'pending', '2021-07-10', 4);

INSERT INTO quotes (from_city, to_city, depart_date, return_date, transportation, price, trip_message, trip_status, begin_date, close_date, person_id)
VALUES ('Vancouver', 'Beijing', '2021-09-03', '2021-09-10', 'airplane', 12000, 'see the ancient history', 'closed', '2021-06-15', '2021-06-20', 5);

INSERT INTO quotes (from_city, to_city, depart_date, return_date, transportation, price, trip_message, trip_status, begin_date, person_id)
VALUES ('Berlin', 'Amsterdam', '2021-10-10', '2021-10-25', 'airplane', 3000, 'quick Euro trip', 'pending', '2021-07-12', 6);
