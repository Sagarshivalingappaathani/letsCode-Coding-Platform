import { Problem } from "../types/problem";
import { quickSort } from "./quick-sort";
<<<<<<< HEAD
import { nextGretestEle } from "./next-greater-ele";
import { equilibriumPoint } from "./equilibrium-point";
import { midOfLL } from "./mid-linkedList";
import { noIsland } from "./no-island";
=======
<<<<<<< HEAD
import { nextGretestEle } from "./next-greater-ele";
import { equilibriumPoint } from "./equilibrium-point";
import { midOfLL } from "./mid-linkedList";
=======
<<<<<<< HEAD
import { nextGretestEle } from "./next-greater-ele";
=======
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"quick-sort": quickSort,
<<<<<<< HEAD
	"next-greatest-ele":nextGretestEle,
	"equilibrium-point": equilibriumPoint,
	"mid-linkedList":midOfLL,
	"no-island":noIsland
=======
<<<<<<< HEAD
	"next-greatest-ele":nextGretestEle,
	"equilibrium-point": equilibriumPoint,
	"mid-linkedList":midOfLL
=======
<<<<<<< HEAD
	"next-greatest-ele":nextGretestEle,
=======
>>>>>>> 65bee72f7b88fd6ed51a7569ac1cb19468ee09b9
>>>>>>> 1941fdf46ed3aca57869ea6dbebda59c8477071a
>>>>>>> 1c040fbeb3d56f0e719643ab3cddfbf7a540ef6e
};