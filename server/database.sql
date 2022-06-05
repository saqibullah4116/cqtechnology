CREATE DATABASE studentBook;

CREATE TABLE students(
student_id SERIAL PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL
);

CREATE TABLE booklist(
book_id SERIAL PRIMARY KEY,
book_name VARCHAR(60) NOT NULL,
author_name VARCHAR(40) NOT NULL,
borrow_by VARCHAR(30) NOT NULL,
borrow_date DATE DEFAULT CURRENT_DATE,
expected_return_date DATE NOT NULL
);