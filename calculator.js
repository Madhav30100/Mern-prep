function add(a,b) {
   return a+b;
}

function subtract(a,b){
   return a-b;
}

function multiply(a,b){
   return a*b;
}

function divide(a,b){
    if(b == 0){
        return "cannot divide by zero";
    }
    return a/b;
}

console.log("add(10,5) =",add(10,5))
console.log("subtract(10,5) =",subtract(10,5))
console.log("multiply(10,5) =",multiply(10,5))
console.log("divide(10,5) =",divide(10,5))
console.log("divide(10,0) =",divide(10,0))

