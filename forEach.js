let hash = ["ant", "bat", "cat", 42]; 
hash.forEach( element => console.log(element)); 

let soliloquy = "To be, or not to be, that is the question:"; 
    Array.from(soliloquy).forEach(function(character) { 
    console.log(character); 
});


//Sorts the array numerically 
let a = [8, -17, 42, -99]; 
a.sort(function(a, b) { 
    return a - b; 
}); 


// sorting array anonymous way
let aa = [99,17,-12,5];
aa.sort(function(a,b) { return a-b; });
aa.forEach(function(a,b){
  console.log(a-b);
});