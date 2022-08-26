export type Board = {
	boardid: number
	title: string
	image: string
	url: string
	startdate: string
	enddate: string
	discription: string
}
export type Project = {
	projectid: Number
	contents: String
}
export type ProjectDetail = {
	projectid: Number
	contents: string
	title: string
	image: string
	url: string
	startdate: string
	enddate: string
	discription: string
}

export type ProjectCreate = {
	title: string
	startdate: string
	enddate: string
	contents: string
	image: string
	url: string
}