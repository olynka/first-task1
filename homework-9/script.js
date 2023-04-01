
function generateBlocks() {
    const block = document.querySelector('.scene');
    console.log(block);

    block.innerHTML+=`<div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>`

    let g = document.querySelectorAll('.box');
   
  for (let i= 0; i < g.length; i++) {
      g[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      g[i].style.height = "50px";
      g[i].style.flexBasis = "50px";
      g[i].style.margin = "10px";
      g[i].style.borderRadius = "10px";
      g[i].style.border = "solid black 1px";
  
  }
 
  return
};


function generateBlocksInterval() {

    setInterval(() => {
        let g = document.querySelectorAll('.box');
        for (let i = 0; i < g.length; i++) {
            g[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
    }, 1000);
    

    return 
}



    


console.log(generateBlocks());
console.log(generateBlocksInterval());
