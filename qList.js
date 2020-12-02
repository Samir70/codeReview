import { sortColors1pass, sortColors2pass } from './codeToReview/sortColors.js';
// array tasks
import { kadane } from './codeToReview/ArrayTasks/kadanesAlgorithm.js';
import { mergeIntervals } from './codeToReview/ArrayTasks/mergeIntervals.js';
import { findTrioWithSum } from './codeToReview/ArrayTasks/findTrioWithSum.js';
// tree functions
import { inorderIterative, inorderRecursive } from './codeToReview/treeTraversals.js'
import { helloWorld } from './codeToReview/helloWorld.js';
// design objects
import { stockSpanner } from './codeToReview/stockSpan.js'
// Vue 
import { vueTodoWComponent } from './codeToReview/Vue/todoListWithComponent.js'

export const qList = [
    helloWorld,
    sortColors1pass, sortColors2pass,
    // array tasks
    kadane, mergeIntervals, findTrioWithSum,
    // tree functions
    inorderIterative, inorderRecursive,
    // design objects
    stockSpanner,
    // Vue
    vueTodoWComponent
].map((x, i) => { return { ...x, id: i } })