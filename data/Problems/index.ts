import { Problem } from "../types/problem";
import { quickSort } from "./quick-sort";
import { nextGretestEle } from "./next-greater-ele";
import { equilibriumPoint } from "./equilibrium-point";
import { midOfLL } from "./mid-linkedList";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"quick-sort": quickSort,
	"next-greatest-ele":nextGretestEle,
	"equilibrium-point": equilibriumPoint,
	"mid-linkedList":midOfLL
};