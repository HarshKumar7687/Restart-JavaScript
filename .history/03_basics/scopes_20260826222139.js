//global scope
let a = 10;
function outerFunction(){
    let b = 20;
    function innerFunction(){
        let c = 30;
        console.log(a,b,c);
    }
    innerFunction();
}

outerFunction();

if(true){
    let d = 40;
    var e = 50;
    console.log(d);
    console.log(e);
}
console.log(e);
console.log(d);
