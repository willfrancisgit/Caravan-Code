CREATE TABLE IF NOT EXISTS equipment (
	user_name TEXT, 
	/*equipment*/
	Rope BOOLEAN,
	Chalk_bag BOOLEAN,
	Carabiners BOOLEAN,
	Belay BOOLEAN,
	Ice_ax BOOLEAN,
	Ice_screw BOOLEAN,
	PRIMARY KEY (user_name)
);