import { Problem } from "../types/problem";
import { quickSort } from "./quick-sort";
import { nextGretestEle } from "./next-greater-ele";
import { equilibriumPoint } from "./equilibrium-point";
import { midOfLL } from "./mid-linkedList";
import { noIsland } from "./no-island";
import { postfix } from "./postfix";
import { pascalsTriangle } from "./pascals-triangle";
import { permutStr } from "./permut-str";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"quick-sort": quickSort,
	"next-greatest-ele":nextGretestEle,
	"equilibrium-point": equilibriumPoint,
	"mid-linkedList":midOfLL,
	"no-island":noIsland,
	"postfix":postfix,
	"pasacals-triangle":pascalsTriangle,
	"permut-str":permutStr
};