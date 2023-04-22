const buttonPlus = document.querySelector(".buttonPlus");
const buttonMinus = document.querySelector(".buttonMinus");
const textElement = document.querySelector(".text");


function* generatorId() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const generator = generatorId();
const generateButton = document.querySelector(".button");
generateButton.addEventListener("click", () => { console.log(generator.next().value) });




function* infiniteGenerator(style) {
    let initial = style;
    for (let i = 0; i < Infinity; i++) {
        const key = yield initial;
        if (key === "plus") {
            initial += 2;
            textElement.style.fontSize = initial + "px";
        }
        if (key === "minus") {
            initial -= 2;
            textElement.style.fontSize = initial + "px";
        }
    };
};

const nextGenerator = infiniteGenerator(14);
buttonPlus.addEventListener("click", () => { nextGenerator.next("plus") });
buttonMinus.addEventListener("click", () => { nextGenerator.next("minus") });