//5:05:20
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
    console.log(d);
}
