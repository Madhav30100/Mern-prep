function isAnagram(s,t){
    if(s.length !== t.length){
        return false
    }


// Sort s
let sortedS = s.split('').sort().join('');

// Sort t
let sortedT = t.split('').sort().join('');

// Compare them
if(sortedS === sortedT){
    return true;
}else{
    return false;
}
}

console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));
console.log(isAnagram("rat","rats"))