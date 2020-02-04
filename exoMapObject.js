let towns = ["NYC", "LA", "Dublin", "Dubai"]; 
let inhabitants = ["500,000", "1,000,000", "40,000", "7800"]; 

let count = new Map(); 
for ( let i = 0; i < towns.length; i++) {  
    count.set(towns[i], inhabitants[i]); 
} 
console.log(count); 

