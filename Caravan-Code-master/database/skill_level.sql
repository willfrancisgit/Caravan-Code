CREATE TABLE IF NOT EXISTS skill_level (
	user_name TEXT, 
	/*skill level*/
	Beginner BOOLEAN,
	Some_exp BOOLEAN,
	Intermediate BOOLEAN,
	Experienced BOOLEAN,		
	Pro BOOLEAN,
	PRIMARY KEY (user_name)
);