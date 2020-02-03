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

// URLs functional version 
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

// singles: Functional version     
function functionalSingles(elements) {  
    return elements.filter(element => element.split(/\s+/).length === 1); 
} 
console.log(functionalSingles(states)); 


// EXO N°1: String.includes DAKOTA 
function imperativeInclude(elements) {  
    const search = "Dakota"; 
    return elements.filter(elements => elements.includes(search))
} 
console.log(imperativeInclude(states)); 

// EXO N°2: Regex Functional version     
function functionalRegex(elements) {  
    return elements.filter(element => element.split(/\s+/).length === 2); 
} 
console.log(functionalRegex(states)); 