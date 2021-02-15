import { sortColors1pass, sortColors2pass } from './codeToReview/sortColors.js';
// array tasks
import { kadane, fisherYatesShuffle, nextGreaterElement, firstMissingPositive } from './codeToReview/ArrayTasks/arrayTasks.js';
import { mergeIntervals } from './codeToReview/ArrayTasks/mergeIntervals.js';
import { findTrioWithSum } from './codeToReview/ArrayTasks/findTrioWithSum.js';
import { unsortedSubarray, unsortedSubarrayN2} from './codeToReview/ArrayTasks/smallestUnsortedSubarray.js'
import { longestCommonSubsequence } from './codeToReview/ArrayTasks/longestCommonSubSeq.js';
// graph tasks
import { topologicalOrder, bisectGraph, subtreeWithAllDeepest, dijkstrasAlgorithm } from './codeToReview/graphs.js';
// linked list tasks
import { mergeTwoListsRecursive, mergesortedListsIterative, mergeKLists } from './codeToReview/listTasks/mergeSortedLists.js';
// backtracking tasks
import { uniquePathsIII } from './codeToReview/backtrackingTasks/uniquePaths.js'
// genarate tasks
import { klarnerRado, tribonacci } from './codeToReview/generateTasks/sequences.js';
import { removeKDigits } from './codeToReview/generateTasks/removeKDigits.js';
import { reverseDigits } from './codeToReview/generateTasks/reverseDigits.js'
import { nextPermutation } from './codeToReview/generateTasks/nextPermutation.js'
// tree functions
import { inorderIterative, inorderRecursive } from './codeToReview/treeTraversals.js'
import { helloWorld } from './codeToReview/helloWorld.js';
// design objects
import { stockSpanner } from './codeToReview/stockSpan.js'
// properties 
import { longestPalindrome } from './codeToReview/Properties/properties.js'
// Vue 
import { vueTodoWComponent } from './codeToReview/Vue/todoListWithComponent.js'

export const qList = [
    helloWorld,
    sortColors1pass, sortColors2pass,
    // array tasks
    kadane, fisherYatesShuffle, nextGreaterElement, firstMissingPositive,
    mergeIntervals, findTrioWithSum,
    unsortedSubarray, unsortedSubarrayN2,
    longestCommonSubsequence,
    // graph tasks
    topologicalOrder, bisectGraph, subtreeWithAllDeepest, dijkstrasAlgorithm,
    // linked list tasks
    mergesortedListsIterative, mergeTwoListsRecursive, mergeKLists,
    // backtracking tasks
    uniquePathsIII,
    // generate tasks
    tribonacci, klarnerRado,
    removeKDigits, reverseDigits,
    nextPermutation,
    // tree functions
    inorderIterative, inorderRecursive,
    // design objects
    stockSpanner,
    // properties
    longestPalindrome,
    // Vue
    vueTodoWComponent
].map((x, i) => { return { ...x, id: i } })