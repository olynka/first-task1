
function generateBlocks() {
    const block = document.querySelector('.scene');
    const blocks = 25;

    for (let i = 0; i < blocks; i++) {
        const div =document.createElement("div");
        div.classList.add('box');
         block.append(div);
        
    }
   const bocksChildren = document.querySelectorAll('.box'); 
    
  for (let i= 0; i < bocksChildren.length; i++) {
     bocksChildren[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
     bocksChildren[i].style.height = "50px";
     bocksChildren[i].style.flexBasis = "50px";
     bocksChildren[i].style.margin = "10px";
      bocksChildren[i].style.borderRadius = "10px";
     bocksChildren[i].style.border = "solid black 1px";
  
  }
 
  return "квадрати не змінюють колір"
};


function generateBlocksInterval() {

    setInterval(() => {
        let bocksChildren = document.querySelectorAll('.box');
        for (let i = 0; i < bocksChildren.length; i++) {
           bocksChildren[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
    }, 1000);
    

    return "квадрати змінюють колір"
}

const button = document.querySelector('.button');



const handleClick = () => {
     let g = document.querySelectorAll('.box');
    generateBlocksInterval()
  
    
};


button.addEventListener("click", handleClick);



console.log(generateBlocks());
// console.log(generateBlocksInterval());
