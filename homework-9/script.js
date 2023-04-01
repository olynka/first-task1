
function generateBlocks() {
    const block = document.querySelector('.scene');
    const blocks = 25;

    for (let i = 0; i < blocks; i++) {
        const d =document.createElement("div");
        d.classList.add('box');
         block.append(d);
        console.log(d);
        
    }
    let g = document.querySelectorAll('.box');
    console.log();
   
  for (let i= 0; i < g.length; i++) {
      g[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      g[i].style.height = "50px";
      g[i].style.flexBasis = "50px";
      g[i].style.margin = "10px";
      g[i].style.borderRadius = "10px";
      g[i].style.border = "solid black 1px";
  
  }
 
  return 3
};


function generateBlocksInterval() {

    setInterval(() => {
        let g = document.querySelectorAll('.box');
        for (let i = 0; i < g.length; i++) {
            g[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
    }, 1000);
    

    return 6
}

console.log(generateBlocks());
console.log(generateBlocksInterval());
