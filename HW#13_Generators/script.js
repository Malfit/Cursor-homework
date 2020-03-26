//---------------------1-------------------------
console.log("Task1");
function* createIdGenerator() {
    let i = 0;
    while(true){
        yield i++;
    }
}
const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

//------------------------------------------------

//----------------------2-------------------------
console.log("Task2");
function* newFontGenerator(fontSize) {    
    while(true){
        let i = yield fontSize;
        if (i === "up") {
            fontSize += 2;
        } else if (i === "down") {
            fontSize -= 2;
        }
    }
}
const fontGenerator = newFontGenerator(14);

console.log(fontGenerator.next("up").value);   //-> 14
console.log(fontGenerator.next("up").value);   //-> 16
console.log(fontGenerator.next("up").value);   //-> 18
console.log(fontGenerator.next().value);       //-> 18
console.log(fontGenerator.next("down").value); //-> 16
console.log(fontGenerator.next("down").value); //-> 14
console.log(fontGenerator.next("down").value); //-> 12
console.log(fontGenerator.next().value);       //-> 12
//------------------------------------------------