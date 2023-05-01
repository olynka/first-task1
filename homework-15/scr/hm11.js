export function getRandomChinese(lengths) {

       const  result = [];
    
    while ( result.length <= lengths - 1) {
         
        const sign = String(Date.now()).slice(8, Date.now().length);
       
         result.push(String.fromCharCode(sign));
        
      console.log(sign);
             
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(result.join(""));
        },lengths*500)
});
    return promise
} 
    