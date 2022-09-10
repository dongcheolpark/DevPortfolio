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
	projectid: number
	contents: String
}
export type ProjectDetail = {
	boardid: number
	contents: string
	title: string
	image: string
	url: string
	startdate: string
	enddate: string
	discription: string
}

export type ProjectCreate = {
	boardid : number | null
	title: string
	startdate: string
	enddate: string
	contents: string
	image: string
	url: string
}