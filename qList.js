import {sortColors1pass, sortColors2pass} from './codeToReview/sortColors.js';
import {kadane} from './codeToReview/kadanesAlgorithm.js'

export const qList = [
    sortColors1pass, sortColors2pass,
    kadane
].map((x, i) => {return {...x, id:i}})