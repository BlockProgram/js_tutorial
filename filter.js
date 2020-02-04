let test = [20, 500, 283, 900798, 3, 83, 868]; 

function filtering(elements) {  
    return elements.filter(elements => elements > 100); 
} 
console.log(filtering(test)); 