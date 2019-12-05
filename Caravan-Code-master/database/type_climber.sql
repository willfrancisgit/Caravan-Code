CREATE TABLE IF NOT EXISTS type_climber (
	user_name TEXT, 
	/*type of climbing*/
	Trad BOOLEAN,
	Sport BOOLEAN,
	FS BOOLEAN,
	Ice BOOLEAN,
	PRIMARY KEY (user_name)
);