function dayName(date) { 
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday"];

    return daysOfTheWeek[date.getDay()]; 
} 

function greeting(date) {  
    const message = `Hello, world! Happy ${date}.`; 
    return message; 
} 
