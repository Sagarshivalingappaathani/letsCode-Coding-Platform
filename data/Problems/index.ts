import { Problem } from "../types/problem";
import { quickSort } from "./quick-sort";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"quick-sort": quickSort,
};