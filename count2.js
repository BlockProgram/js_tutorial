let text = `Lorem ipsum 90210-5506 dolor, sit amet consectetur adipisicing elit. 
98450-2395 Beatae quo aspernatur dolorum 94301-3482 illum voluptate, modi fugit praesentium suscipit,
 illo voluptatum consequatur architecto cupiditate eveniet non culpa tempore 
 perspiciatis saepe aut soluta 99999-3332 sapiente eum mollitia, 94301-3482 adipisci tempora atque! 
 Voluptatem, quisquam molestiae debitis maiores 93482-5642 rerum mollitia totam, placeat 
 libero, quo vitae deleniti 94301-3482.`

let countMap = new Map (); 
let codes = text.match(/\d{5}-\d{4}/g); 


for (let i = 0; i < codes.length; i++) { 
     let code = codes[i]; 
     let currentValue = countMap.get(code); 
     if (countMap.get(code)) {  
        countMap.set(code, currentValue + 1);
     } else {
        countMap.set(code, 1); 
    } 
} 
 
  console.log(countMap)



