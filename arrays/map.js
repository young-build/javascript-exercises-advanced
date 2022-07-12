// @ts-check
/**
 * hover in the numberArray keyword
 * The goal is to sort the array based on its first digit
 * @type {number[]}
 */
const numberArray = [253, 62, 623, 2, 3423, 6, 5234, 2342, 34]

/**
 * a callback function that will be passed to the map argument of number array
 * @param {number} number 
 * @param {number} index 
 * @returns {number}
 */
function sortArrayAtFirst(number, index) {
  throw new Error("implement function first")
}

/**
 * @type {number[]}
 */
const sortedArray = numberArray.map(sortArrayAtFirst)