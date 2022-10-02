// string anagram (is the another string that contains the same chracter)
//  'hello' -> 'olleh

// conditon 1 - checking the length (for both strings)
// condition 2 - checking the no. of times chracter is repeating 
// {h:1, e:1, l:2, o:1} // so called keys and values



function isAnagram(string1,string2) {
if(string1.lenght!==string2.lenght) {
    return false;
}

let counter = {};
for(let letter of string1){ 
 counter[letter]=(counter[letter] || 0) +1 ;
 console.log(counter[letter]);
    
}

// this if for string 2
for(let items of string2) {
    if(!counter [items]) {
        return false;
    }
    counter[items]-=1. // main logic
}
return true;
}

const check= isAnagram('hello', 'lhheo');
console.log(check);


// linear time complexity o(n)
// output is 1,1,1,2,1
// for the letter h that is undefined for the first time that is 0 and we add + 1 so it becomes '1'.
// same goes before 2, now L comes 2 time so in first time it will come undefined +1 and then it comes second time it will add +1.
