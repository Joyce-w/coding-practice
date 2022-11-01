var twoSum = function(nums, target) {
    //sort array
    let sortedNums = nums.sort((a,b) => a-b);
    //create front pointer
    let left = 0;
    //create back pointer
    let right = sortedNums.length - 1;
    
    while(left < right) {
        //sum pointed values
        let sum = sortedNums[left] + sortedNums[right];
        console.log( sortedNums[left],sortedNums[right])
        //return index if pointed values are equal to target
        if(sum === target){
            return [left, right];
        } else if (sum > target){
            right--;
        } else {
            left++;
        }
    }
    return [];
}