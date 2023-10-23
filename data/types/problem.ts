<<<<<<< HEAD
export type details = {
=======
<<<<<<< HEAD
export type details = {
=======
<<<<<<< HEAD
export type details = {
=======
export type Company = {
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
	id: number;
	name:string
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
export type Tag={
	id: number;
	name:string
}
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9

>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

// local problem data
export type Problem = {
	id: string;
<<<<<<< HEAD
	order: number;
=======
<<<<<<< HEAD
	order: number;
=======
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
	title: string;
	problemStatement: string;
	difficulty: string;
	examples: Example[];
	constraints: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
	starterCode: details[];
	intialcode:details[],
	endingcode:details[],
	solutioncode:details[]
<<<<<<< HEAD
=======
=======
	order: number;
<<<<<<< HEAD
	starterCode: details[];
	intialcode:details[],
	endingcode:details[],
	starterFunctionName: string;
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
	inuputs:string
	output:string
	tag:details[]
	companies:details[]
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
	starterCode: string;
	starterFunctionName: string;
	inuputs:string
	output:string
	tag:Tag[]
	companies:Company[]
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
	averagetime:string
};

export type DBProblem = {
	id: string;
	title: string;
	category: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
};