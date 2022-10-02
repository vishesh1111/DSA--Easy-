// recursion: when a fucntion call itself
// otherwise it will get called for infnite time
// if a function call itself then there must be an end point

let counter = 1;
function demo(number){ // function with definiation 
   if(counter < number){
    return;
   }
   console.log("lorem212" + counter );
   counter++;
   demo(number)
}

demo(10); // calling the function 