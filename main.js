let Phrase = require("mhartl-palindrome"); 

let string = prompt("Please enter a string for palindrome testing"); 
let phrase = new Phrase(string); 

if (phrase.palindrome()) {
    return alert(`"${phrase.content}" is a palindrome!`); 
    } else {    
    return alert(`${phrase.content}" is not a palindrome`); 
    }  
