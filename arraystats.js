const nums = [4,8,15,16,23,42]

let sum = 0;
let max = nums[0];
let min = nums[0];

for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];

    if(nums[i] > max){
        max = nums[i];
    }
    if(nums[i] < min){
        min = nums[i];
    }
}

const average = sum / nums.length;

console.log("Sum",sum);
console.log("Average",average);
console.log("Max",max);
console.log("Min",min);