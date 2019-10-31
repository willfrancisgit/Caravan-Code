

CREATE TABLE IF NOT EXISTS user_info (
	uname TEXT,			/*user name*/
	pass TEXT,			/*password*/
	fname TEXT,			/*first name*/
	lname TEXT,			/*last name*/
	about_me TEXT, 		/*Bio*/
	zip INT, 			/*zip code*/

	/*days available*/
	Su BOOLEAN,			
	Mo BOOLEAN,
	Tu BOOLEAN,
	We BOOLEAN,
	Th BOOLEAN,
	Fr BOOLEAN,
	Sa BOOLEAN,

	/*type of climbing*/
	Trad BOOLEAN,
	Sport BOOLEAN,
	FS BOOLEAN,
	Ice BOOLEAN,

	/*skill level*/
	Beginner BOOLEAN,
	Some_exp BOOLEAN,
	Intermediate BOOLEAN,
	Experienced BOOLEAN,		/*"a lot of experience"*/
	Pro BOOLEAN,

	/*equipment*/
	Rope BOOLEAN,
	Chalk_bag BOOLEAN,
	Carabiners BOOLEAN,
	Belay BOOLEAN,
	Ice_ax BOOLEAN,
	Ice_thing BOOLEAN 			/*"ice screw thing"*/
);