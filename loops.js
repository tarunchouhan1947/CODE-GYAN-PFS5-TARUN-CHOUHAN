
let count=0;
for(let i=1;i<=5;i++){
    count=count+i;//0+1,1+2
}
console.log("count = ",count)

//for loop example of n user input add numbers up to 100//
let count1=0
let n=100;
for(i=1;i<=n;i++){
    count1=count1+i//(0+1,1+2)
}
console.log(count1) 

//while loop//
let count2=1;//initialization
while(count2<=8){//condition 
    console.log("hello world")
    count2++;//update
}
//do while//
count3=1
do{
    console.log("i=",count3)
    count3++
}while(count3<=5);

//for of loop in string//(used in strings and arrays not objects make changes for each character in strings and array)
let str=("hello world")
for(let val of str){
    console.log(val.toUpperCase())
}


let arr=[1,2,3,4,5,6,7]
for(let val1 of arr){
    console.log(arr[0],arr[1])
}

//for in loop(used for accesing the objects comma are necessary in obj no need for last one)
let obj={

    name:"tarun chouhan",
    age:21,
    cgpa:7.0

}
for(let keys in obj){
    console.log("keys=",keys,"values=",obj[keys])
}
//print numbers from o to 100//
i=0;
for(i=0;i<=100;i++){
    console.log(i)
}
//print even numbers 1 to 100

sum=1;
for(i=1;i<=100;i++){
    sum++
if (sum%2===0){
    console.log(sum)
}

}
//guessing a number
let gamenum=25;
let usernum=prompt("enter the number")
while (usernum!=gamenum){
usernum=prompt("you guess the wrong number")
}
console.log("you are the winner")
