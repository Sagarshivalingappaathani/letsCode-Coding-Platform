<<<<<<< HEAD
export type details = {
=======
export type Company = {
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9
	id: number;
	name:string
};

<<<<<<< HEAD

=======
export type Tag={
	id: number;
	name:string
}
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9

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
	title: string;
	problemStatement: string;
	difficulty: string;
	examples: Example[];
	constraints: string;
	order: number;
<<<<<<< HEAD
	starterCode: details[];
	intialcode:details[],
	endingcode:details[],
	starterFunctionName: string;
	inuputs:string
	output:string
	tag:details[]
	companies:details[]
=======
	starterCode: string;
	starterFunctionName: string;
	inuputs:string
	output:string
	tag:Tag[]
	companies:Company[]
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9
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