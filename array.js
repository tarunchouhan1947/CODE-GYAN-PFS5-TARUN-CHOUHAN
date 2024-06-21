//array//
let array1=[1,2,3,4,5,6]
array1[0]=24// we can change the value in array bit not in strings because strings are mutable//
console.log(array1)

//length of array//
let array2=["hello","world","i","am","a","good","man"]
console.log(array2.length)

//using for loop in array
let heroes=["thanos","hulk","spiderman","antman"]
for(i=0;i<heroes.length;i++){
    console.log(heroes[i].toUpperCase());
}

//for of loop using array//
for(let name of heroes){
    console.log(name.toUpperCase())
}

//find the average marks of the class//
let marks=[85,97,44,37,76,60]
sum=0;
for(let student of marks){
   
    sum=sum+student;
    
}
let avg=sum/marks.length;
console.log(avg)

//find the final price//
let currprice=[250,645,300,900,50]
i=0;
for (let s of currprice){
    let afterprice=s/10;
    currprice[i]=currprice[i]-afterprice
i++;
}
console.log(currprice)
//for loop//
let currprice1=[250,645,300,900,50]
for(i=0;i<currprice1.length;i++){
    let val=currprice1[i]/10
    currprice1[i]=currprice1[i]-val

}
console.log(currprice1)

//push//
let pushval=["tarun","apple","banana","orange"]
pushval.push("cherry")
console.log(pushval)

//pop//delete last value
pushval.pop()
console.log(pushval)

//concact//combining two arrays
 let pushval1=["hello","hello1"]
 let concat=pushval.concat(pushval1)
 console.log(concat)

 //unshift//add new element to the first array
let unshift=["tarun","apple","banana","orange"]
unshift.unshift("chouhan")
console.log(unshift)

//shift//delete first element
let shift=["tarun","apple","banana","orange"]
shift.shift()
console.log(shift)

//slice//piece of array returns last value wont print
let slice=["tarun","apple","banana","orange"]
console.log(slice.slice(1,3))

//splice//
let arr=[1,2,3,4,5,5,67,88,77]
arr.splice(1,3,100,100,100)//(1 is index,3 next elements delete,100 100 100 replaced)
console.log(arr)
//add//
arr.splice(5,0,700)
console.log(arr)
//delete//
arr.splice(1,1)
console.log(arr)

//practice question//
let companies=["bloomberg","microsoft","uber","google","ibm","netflix"]
//companies.shift()
console.log(companies)

//companies.splice(2,1,"ola")
console.log(companies)

companies.push("AMAZON")
console.log(companies)
