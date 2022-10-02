// divide and conquer technique
// find the index of given no. in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] -->  index 6 --> output 

// min = 0, element=0; , indexing --> 0 
// max = array.lenght-1 , element = 15; , indexing -->14

// conditions :-
// Finding minIndex = (min+max)/2 --> {0+14}/2  ==> 7 Index , Element -> 8 
// if array  {minIndex} <  number that i want 7
// min=maxIndex+1;
// array{minIndex} > number

// max=minIndex-1  , min = 0, max = 7-1=6  {1,2,3,4,5,6,7}
// formula for only this [min+max]/2 ==> 3
// Index + 1 = 4; min = 4,  max = 6  {5,6,7}

// again formula (min+max)/2  --> 5+1 = 6(min) , max = 6;
// again formula (min+max)/2  --> 6+6/2 = 6 

// else minIndex = 6, then return element = 7 




function searchAlgo(array,number) {
  let min=0;
  let max=array.length-1;

  while(min <= max){
    let midIndex = Math.floor((min+max) /2 );
    console.log("midIndex"+midIndex+"min"+min+"max"+max);

    if(array [midIndex]< number ){
        min=midIndex+1;
    } else if (array [midIndex] > number ){
        max=midIndex-1
    } else {
       return midIndex;
    }
  }
  return -1;
}

const result = searchAlgo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7);
console.log(result);


// Time complexity O(log(n))