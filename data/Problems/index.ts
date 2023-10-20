import { Problem } from "../types/problem";
import { quickSort } from "./quick-sort";
<<<<<<< HEAD
import { nextGretestEle } from "./next-greater-ele";
=======
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"quick-sort": quickSort,
<<<<<<< HEAD
	"next-greatest-ele":nextGretestEle,
=======
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9
};