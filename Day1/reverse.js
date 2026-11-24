const str = "madhav";

let reversed = "";

for(i = str.length - 1; i>=0;i--){
    reversed = reversed + str[i];
}

console.log("Original:",str);
console.log("Reversed:",reversed + "!");