import {sortColors1pass, sortColors2pass} from './codeToReview/sortColors.js';

export const qList = [
    sortColors1pass, sortColors2pass
].map((x, i) => {return {...x, id:i}})