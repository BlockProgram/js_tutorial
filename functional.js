let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];    

// Returns a URL-friendly format of a string (north-dakota)
function urlify(string) {  
    return string.toLowerCase().split(/\s+/).join("-");
} 


// // URLs imperative version 
function imperativeUrls(elements) {  
    let urls = [];
    elements.forEach(function(element) {  
        urls.push(urlify(element)); 
    }); 
    return urls; 
} 
console.log(imperativeUrls(states)); 


// MAP FUNCTION: URLs functional version 
function functionalUrls(elements) {  
    return elements.map(element => urlify(element)); 
} 
console.log(functionalUrls(states)); 


// Exercise 6.1 map : Using map, write a function that takes in the states variable 
// and returns an array of URLs of the form https://example.com/<urlified form>.
function urlMaker(string) {  
    return string.map(string => `https://example.com/${urlify(string)}`); 
}

console.log(urlMaker(states)); 

//singles: Imperative version     
function imperativeSingles(elements) {  
    let singles = [];
    elements.forEach(function(element) {  
        if (element.split(/\s+/).length === 1) {  
            singles.push(element); 
        } 
    });
    return singles; 
} 
console.log(imperativeSingles(states)); 

// FILTER: Functional version     
function functionalSingles(elements) {  
    return elements.filter(element => element.split(/\s+/).length === 1); 
} 
console.log(functionalSingles(states)); 


// EXO FILTER N°1: String.includes DAKOTA 
function imperativeInclude(elements) {  
    const search = "Dakota"; 
    return elements.filter(elements => elements.includes(search))
} 
console.log(imperativeInclude(states)); 

// EXO FILTER N°2: Regex Functional version     
function functionalRegex(elements) {  
    return elements.filter(element => element.split(/\s+/).length === 2); 
} 
console.log(functionalRegex(states)); 


// REDUCE SECTION 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// Sum: imperative solution 
function imperativeSum(elements) {  
    let total = 0; 
    elements.forEach(function(n) { 
        total += n; 
     });
     return total;  
}
console.log(imperativeSum(numbers)); 

// REDUCE: Sum functional solution 
function functionalSum(elements) {  
    return elements.reduce((total, n) => { return total += n }); 
}
console.log(functionalSum(numbers)); 

// Exo 2: lengths imperative solution 
function imperativeLengths(elements) { 
    let lengths = {}; 
    elements.forEach(function(element) {  
        lengths[element] = element.length; 
    }) 
    return lengths; 
 } 
 console.log(imperativeLengths(states)); 

 // Exo 2: REDUCE : lengths function solution 
 // The value of the accumulator (lengths) is set to {} (right at the end of the function), 
 // so that the reduce method knows we're starting from an empty plain object
function functionalLengths(elements) { 
    return elements.reduce((lengths, element) => {  
        lengths[element] = element.length; 
        return lengths; 
    }, {}); 
    }

 console.log(functionalLengths(states)); 

 function functionalLengths(states) {
    return states.reduce((lengths, state) => { 
        lengths[state] = state.length;
         return lengths;}, {});
  }