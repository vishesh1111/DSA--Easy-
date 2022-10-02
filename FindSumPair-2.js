// checking the sum zero (-problem 1)
// {-5, -4, -3, -2, 0 ,2, 4 , 6, 8}
// assuming (-5) is left pointer and (8) is right pointer
//  -> input
// {-4, 4 } output

function FindSumPair(array) {
  let left = 0;
  let right = array.lenght - 1;

  while (left < right) {
    sum = array[left] + Array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = FindSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// complexity o(n)
// another solution
