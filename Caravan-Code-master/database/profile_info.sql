CREATE TABLE IF NOT EXISTS profile_info (
	user_name VARCHAR(50),			/*user name*/
	password TEXT,			/*password*/
	first TEXT,			/*first name*/
	last TEXT,			/*last name*/
	about_me TEXT, 		/*Bio*/
	PRIMARY KEY (user_name)
);


#example data:
INSERT INTO profile_info(user_name,password,first,last,about_me)
VALUES 
('sean.f.mceachern@gmail.com', 'password123', 'sean', 'mceachern', 'i dont know how to software dev.');