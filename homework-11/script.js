function getRandomChinese(length) {
   const j = [];
    while (j.length <= length - 1) {
         
        const sign = String(Date.now()).slice(8, Date.now().length);

        j.push(String.fromCharCode(sign));

        setTimeout(() => {
             console.log(j.join(""))
        },length*50)


           }
   return
}

console.log(getRandomChinese(6));

