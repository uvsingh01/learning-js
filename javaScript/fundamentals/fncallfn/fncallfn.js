// example of function calling a function

function cutFruits(fruit){ // here we created a function
    return fruit*3;
}

function juices(apple, orange){
    const applePieces = cutFruits(apple);// here we called an function within a function
    const orangePieces= cutFruits(orange);// here we again called a function within a function
    const juice = `juice was made with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(juices(3, 2));