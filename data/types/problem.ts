export type Company = {
	id: number;
	name:string
};

export type Tag={
	id: number;
	name:string
}

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
	starterCode: string;
	starterFunctionName: string;
	inuputs:string
	output:string
	tag:Tag[]
	companies:Company[]
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