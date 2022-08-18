export type Board = {
	boardid: Number
	title: String
	image: String
	url: String
	startdate: String
	enddate: String
	discription: String
}
export type Project = {
	projectid: Number
	contents: String
}

export type ProjectCreate = {
	title: String
	startdate: String
	enddate: String
	contents: String
	image: String
	url: String
}