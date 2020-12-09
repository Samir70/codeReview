import { sortColors1pass, sortColors2pass } from './codeToReview/sortColors.js';
// array tasks
import { kadane, fisherYatesShuffle } from './codeToReview/ArrayTasks/arrayTasks.js';
import { mergeIntervals } from './codeToReview/ArrayTasks/mergeIntervals.js';
import { findTrioWithSum } from './codeToReview/ArrayTasks/findTrioWithSum.js';
import { longestCommonSubsequence } from './codeToReview/ArrayTasks/longestCommonSubSeq.js';
// linked list tasks
import { mergeTwoListsRecursive, mergesortedListsIterative } from './codeToReview/listTasks/mergeSortedLists.js';
// backtracking tasks
import { uniquePathsIII } from './codeToReview/backtrackingTasks/uniquePaths.js'
// genarate tasks
import { klarnerRado, tribonacci } from './codeToReview/generateTasks/sequences.js'
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
    kadane, fisherYatesShuffle,
    mergeIntervals, findTrioWithSum,
    longestCommonSubsequence,
    // linked list tasks
    mergesortedListsIterative, mergeTwoListsRecursive,
    // backtracking tasks
    uniquePathsIII,
    // generate tasks
    tribonacci, klarnerRado,
    // tree functions
    inorderIterative, inorderRecursive,
    // design objects
    stockSpanner,
    // Vue
    vueTodoWComponent
].map((x, i) => { return { ...x, id: i } })