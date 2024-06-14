function functionname(){
    console.log("tarun chouhan")
}
functionname()

//
function function1(msg){
    console.log(msg)
}
function1("hello")//hello is an argument//msg is an parameter

//
function function2(a,b){
    console.log(a+b);
}
function2(3,7)

//
function function3(a,b){
       s=a+b;
       return s;
       
}
let sum=function3(4,5)
console.log(sum)

//arrow function
let sum1=(a,b)=>{
    console.log(a+b)
}
 sum1(20,20)

//lets print vowels 
function vowels(a){
let count=0;
for (const char of a){
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++
    }
}
console.log(count)
}
vowels("varanasi")