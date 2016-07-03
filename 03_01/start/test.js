console.log("hello kishore, this is console object");
global.console.log("This is global namespace");

var hello = "this is a string";
console.log(global.hello);
console.log(hello);

var justhello = hello.slice(10);
console.log(`rock and roll ${justhello}`);

console.log(__dirname);
console.log(__filename);