/** selection Sort **
 * 
 * Sort the 'nums' array using selection sort.
 *  
 * @example
 * selectionSort([3, 2, 1]) -> [1, 2, 3]
 * selectionSort([0, 12, 8]) -> [0, 8, 12]
 * selectionSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

 const selectionSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let currentMin = i; //the position
        for (let j = i + 1; j < nums.length; j++) {
            let current = nums[j] //number of that position
            if (nums[j] < nums[currentMin]) {
                currentMin = j
            }
        }

        if (currentMin !== i) {
            let temp = nums[i];
            nums[i] = nums[currentMin]
            nums[currentMin] = temp
        }
    }
    return nums
}

module.exports = selectionSort;