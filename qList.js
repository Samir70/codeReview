import {sortColors1pass, sortColors2pass} from './codeToReview/sortColors.js';
import {kadane} from './codeToReview/kadanesAlgorithm.js';
// tree functions
import {inorderIterative, inorderRecursive} from './codeToReview/treeTraversals.js'
import {helloWorld} from './codeToReview/helloWorld.js'

export const qList = [
    sortColors1pass, sortColors2pass,
    kadane,
    // tree functions
    inorderIterative, inorderRecursive,
    helloWorld
].map((x, i) => {return {...x, id:i}})