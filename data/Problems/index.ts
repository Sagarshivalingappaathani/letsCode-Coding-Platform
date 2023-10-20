import { Problem } from "../types/problem";
import { quickSort } from "./quick-sort";
import { nextGretestEle } from "./next-greater-ele";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"quick-sort": quickSort,
	"next-greatest-ele":nextGretestEle,
};