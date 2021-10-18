CREATE DATABASE IF NOT EXISTS ronbosdb;
USE ronbosdb;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	id INT NOT NULL,
    Title VARCHAR(300),
    Author VARCHAR(300),
    YrPublished INT,
    Publisher VARCHAR(300),
    PageCount INT,
    MSRP DECIMAL (7,2)
);



INSERT INTO book VALUES 
(1,'Harry Potter & The Sorcerers Stone','J.K. Rowling',1997,'Bloomsburg Publishing',223,6.98),
(2,'To Kill A Mockingbird','Harper Lee',1960,'J.B. Lippincott & Co.',281,14.99),
(3,'The Great Gatsby',' F. Scott Fitzgerald',1925,"Charles Scribner's Sons",240,2.99),
(4,'Pride and Prejudice','Jane Austin',1901,'Simon & Schuster',408,4.99),
(5,'The Lord of The Rings','J. R. R. Tolkien',1954,'Allen & Unwin',1178,5.99),
(6,'The Very Hungry Caterpillar','Eric Carle',1969,'World Publishing Company',22,6.99),
(7,'Circe','Madeline Millar',2018,'Little, Brown and Company',393,11.99),
(8,'The Catcher in the Rye','J.D. salinger',1951,'Little, Brown and Company',277,9.99);


