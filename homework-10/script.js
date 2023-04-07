function generateBlocks() {
  const block = document.querySelector('.scene');

  const soungs = [
    {
      src: 'sounds/a-sudden-appearance-143034.mp3',
      keyboard: 'A',
      names:'CLAP'    },
    {
      src: 'sounds/button-124476.mp3',
      keyboard: 'S',
      names:'HIHAT'  
    },
    {
      src: 'sounds/error-126627.mp3',
      keyboard: 'D',
      names:'KICK' 
    },
      
    {
      src: 'sounds/notifications-sound-127856.mp3',
      keyboard: 'F',
      names:'OPENHAT' 
    },
    {
     src: 'sounds/short-success-sound-glockenspiel-treasure-video-game-6346.mp3',
     keyboard: 'G',
     names:'BOOM' },
    {
      src: 'sounds/the-notification-email-143029.mp3',
      keyboard: 'H',
      names:'RIDE' },
    {
      src: 'sounds/error-126627.mp3',
      keyboard: 'J',
      names:'SNARE' 
    },
      
    {
      src: 'sounds/error-126627.mp3',
      keyboard: 'K',
      names:'TOM' 
    },
      
    {
      src: 'sounds/error-126627.mp3',
      keyboard: 'L',
      names:'TINK' 
    },
    
  ];
  
  const markup = soungs
    .map(({ src,keyboard,names}) => `<div class='key'><h2 class="letter">${keyboard}</h2><p class="sound">${names}</p></div><audio class="yourAudio" preload="auto">
        <source src=${src} type='audio/wav' />
    </audio>`)
    .join("");
  
  block.innerHTML = markup;

  const bocksChildren = document.querySelectorAll('.key');
  const soungChildren = document.querySelectorAll('.yourAudio');


  for (let i = 0; i < bocksChildren.length; i++) {
    bocksChildren[i].style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    bocksChildren[i].style.height = "90px";
    bocksChildren[i].style.width = "90px";
    bocksChildren[i].style.margin = "30px";
    bocksChildren[i].style.borderRadius = "10px";
    bocksChildren[i].style.border = "thick double whitesmoke";
    bocksChildren[i].style.display = "block";
    bocksChildren[i].style.textAlign = "center";
    bocksChildren[i].style.justifyContent = " center";
    bocksChildren[i].style.textShadow = "0 0 0.5rem black";
    bocksChildren[i].style.transition = "all .07s ease.07s ease";
    bocksChildren[i].style.cursor = "pointer";
  }

for (let i = 0; i < bocksChildren .length; i++) {
  for (let j = 0; j < soungChildren.length; j++) {

  }
  ctrl = bocksChildren[i].addEventListener('click', () => {
          soungChildren[i].play()
        })
    document.addEventListener("keydown", event => {
      const key = [];
        for(const soung of soungs){
          key.push(soung.keyboard);
           for (let i = 0; i < key.length; i++) {
             if (key[i] === (event.key).toUpperCase()) {
       soungChildren[i].play()
   }}}})}
return
}

console.log(generateBlocks());


