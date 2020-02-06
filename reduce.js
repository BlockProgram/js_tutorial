let numbers = [2, 2, 2, 2]  

// Exercice: Reduce function that returns the product of all elements in an array 
function product(elements) {  
    return elements.reduce((total, n) => {
        return total *= n; 
    }); 
} 

console.log(product(numbers))