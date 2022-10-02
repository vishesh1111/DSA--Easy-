// [1,2,3,5,4,6,7,8]  {array}  => total elements - 10
// count largest sum of consecutive digits
// grp of 4 digit  that we want to pair from staring to end 
// if we see the last 4 and thier sum is (25) output

// the loop turns 7 times in the array [formula- 10-4+1=7]
// conditions
// 1. num < array -> throw error message
// 


function findLargest( array, num ) {
    if(num < array) {
        throw new error ("nunber is not greater than array")
    } else {
        let max =0;
        for(let i=0; i<array.length - num + 1; i++){
            let tmp=0;
            for(j=0; j<num;j++){
                console.log("i"+i+"j"+j)
                tmp+=array[i+j];
            }
            if(tmp>max) {
                max=tmp;
            }
        }
        return max;
    }
}


const result = findLargest([1,2,3,4,3,5,4,6,7,8], 4)
console.log(result);