export type details = {
	id: number;
	name:string
};

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
	order: number;
	title: string;
	problemStatement: string;
	difficulty: string;
	examples: Example[];
	constraints: string;
	starterCode: details[];
	intialcode:details[],
	endingcode:details[],
	solutioncode:details[]
	solutiondesc?:string
	inuputs:string
	output:string
	tag:details[]
	companies:details[]
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