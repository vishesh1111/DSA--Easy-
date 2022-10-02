//  identify unique numbers
//  i j   (i:0, j:1,)
// {1,1,2,2,3,4,4,5,6,7,8,8}
// {1,2,3,4,5,6,7,8,6,7,8,8}
// output -> 8
// terms and conditions
// condition 1 - array[i]!==array[j] then we add ++to i.
// 2. we add value array[i]=array[j]

function countUnique (array) {
 if (array.length>0) {
       let i = 0;
       for(let j=1; j<array.length; j++) {
        if(array[i]!==array[j]) {
            i++;  
            // if my [i] and [j] don't match then only i+ will increment!! 
            array[i]=array[j]
        }
    }
       return i+1;
       } else {
        throw new error ("array is empty");
       }

 }
 


 const result = countUnique ([1,1,2,2,3,4,4,5,6,7,8,8,9,9,9,20,20]);
 console.log(result);

 // time complexity Linear o(n);