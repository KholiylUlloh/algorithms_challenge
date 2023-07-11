var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length - 1

    while (low <= high){
        let middle = (low + high)
        let guess = nums[middle]

        if(guess === target){
            return middle
        } else if(guess < target){
            low = middle + 1
        } else {
            high = middle - 1
        }
    }
    return low
};
console.time("test_timer");
console.log(searchInsert([1,3,5,6], 4))
console.timeEnd("test_timer");