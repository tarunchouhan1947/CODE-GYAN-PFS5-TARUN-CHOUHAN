//map function(creates new array)
let num4=[1,2,3,4,5]
let num5=num4.map((val6)=>{
      return val6**2;
})
console.log(num5)

//square of two numbers

let num2=[1,2,3,4,5,6]
num2.forEach((val3)=>{
    console.log(val3**2)
    
})
let num1=["delhi","hyderabad","new york","karnataka"]
num1.forEach((val1,index,ar)=>{
    console.log(val1.toUpperCase(),index,ar)
})
//for each//
let num=[1,2,3,4,5,6]
num.forEach(function eachvalue(val){
    console.log(val)
})
//in arrow function
num.forEach((val)=>{
    console.log(val)
})

//filter
let num6=[1,2,3,4,5,6,7,8,8,9,10]
let num7=num6.filter((val7)=>{
    return val7 % 2===0;
    
})
console.log(num7)

//reduce(previous=1+2=3 next 3+3....)
let num9=[1,2,3,4,5,6,7,8,9]
let num10=num9.reduce((previous,current)=>{
    //return previous+current;
      return previous>current?previous:current
})
console.log(num10)

//filterout 90plus marks students
let num11=[30,45,05,96,38,78,98,99]
let num12=num11.filter((val11)=>{
    return val11>90;
}
)
console.log(num12)

//user enters value print the array till the number
let x=prompt("enter the number ")
let arr=[];

for(let i=1; i<=x; i++){
arr[i-1]=i;
}
console.log(arr)
let res=arr.reduce((previous1,current1)=>{
   // console.log(previous1+current12)
   return previous1*current1
    
})
console.log(res)
