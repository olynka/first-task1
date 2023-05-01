export const getRandomArray = (length, min, max) => {
    const array = [];
    for(let i = 0; i<length; i++){
        const random = Math.floor(Math.random() * (max - min) + min);
        array.push(random);
    } 

    return array;
}