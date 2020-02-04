let hash = ["ant", "bat", "cat", 42]; 
hash.forEach( element => console.log(element)); 

let soliloquy = "To be, or not to be, that is the question:"; 
    Array.from(soliloquy).forEach(function(character) { 
    console.log(character); 
});


// //Sorts the array numerically 
// let a = [8, -17, 42, -99]; 
// a.sort(function(a, b) { 
//     return a - b; 
// }); 


// sorting array anonymous way
let aa = [102,21,-22,7];
aa.sort(function(b,c) { return b-c; });
aa.forEach(function(b,c){
  console.log(b);
});