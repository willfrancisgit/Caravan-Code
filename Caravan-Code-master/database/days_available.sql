CREATE TABLE IF NOT EXISTS days_available (
	user_name TEXT, 

	/*days available*/
	Su BOOLEAN,			
	Mo BOOLEAN,
	Tu BOOLEAN,
	We BOOLEAN,
	Th BOOLEAN,
	Fr BOOLEAN,
	Sa BOOLEAN,
	PRIMARY KEY (user_name)
);