import {sortColors1pass, sortColors2pass} from './codeToReview/sortColors.js';
// array tasks
import {kadane} from './codeToReview/kadanesAlgorithm.js';
import {mergeIntervals} from './codeToReview/mergeIntervals.js'
// tree functions
import {inorderIterative, inorderRecursive} from './codeToReview/treeTraversals.js'
import {helloWorld} from './codeToReview/helloWorld.js';
// Vue 
import {vueTodoWComponent} from './codeToReview/Vue/todoListWithComponent.js'

export const qList = [
    sortColors1pass, sortColors2pass,
    // array tasks
    kadane, mergeIntervals,
    // tree functions
    inorderIterative, inorderRecursive,
    helloWorld,
    // Vue
    vueTodoWComponent
].map((x, i) => {return {...x, id:i}})