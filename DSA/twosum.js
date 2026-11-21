function twoSum(nums, target){
    //1.Create the notebook (Object) to store numbers and their indices 
    let seen = {};

    //2.Loop through the array
    for(let i = 0; i < nums.length; i++){
        let currentNumber = nums[i];

        //3.what number do we need to reach the target ?
        let neededNumber = target - currentNumber;

        //4.is the needed number in our notebook?
        //(We check if it's !-- undefined, because index 0 is technically "falsy")
        if(seen[neededNumber] !== undefined){
            //We found it! Return the index from the notebook, and the current index
            return [seen[neededNumber], i];
        }

        //5.if not found,write the current number in the notebook with its index
        seen[currentNumber] = i;
    }
}

console.log(twoSum([2,7,11,12],9))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))