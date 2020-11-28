import {sortColors1pass, sortColors2pass} from './codeToReview/sortColors.js';
import {kadane} from './codeToReview/kadanesAlgorithm.js';
import {helloWorld} from './codeToReview/helloWorld.js'

export const qList = [
    sortColors1pass, sortColors2pass,
    kadane,
    helloWorld
].map((x, i) => {return {...x, id:i}})