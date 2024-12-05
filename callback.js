/*// promis example
let asyncfunc1=()=>{
    return new Promise((resolve,reject)=>{// return means where we call it prints there only in functions
    setTimeout(() => {
            resolve("success")
    
        },4000)
    });
}
let asyncfunc2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success")

        },4000)
    }

}
/*console.log("fetching data 1..............")
let one=asyncfunc1()
one.then((res)=>{
    console.log("data 1")
    console.log("fetching data 2..............")
    asyncfunc2().then((res)=>{
        console.log("data 2")
    })
    
})*/

/*console.log("fetching data 1.............")
asyncfunc1().then((res)=>{
    console.log("data 1 is ",res)
    console.log("fetching data 2..............")
asyncfunc2().then((res)=>{
    console.log("data 2 is",res )
})
})*/
//ASYNC AWAIT//
let data=(a)=>{ // we can write like this also function data(a) 

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",a)
        resolve("success")

        },4000)
        
    })
}
/*async function alldata(){
    console.log("getting data 1")
    await data(1)
    console.log("getting data 2")
    await data(2)
    console.log("getting data 3")
    await data(3)
    console.log("getting data 4")
    await data(4)
    console.log("getting data 5")
    await data(5)
    console.log("getting data 6")
    await data(6)
    

}
alldata()*/
(async function() {//IFFES METHOD SYNTAX((FUNCTION)()                                END ())
    console.log("getting data 1")
    await data(1)
    console.log("getting data 2")
    await data(2)
    console.log("getting data 3")
    await data(3)
    console.log("getting data 4")
    await data(4)
    console.log("getting data 5")
    await data(5)
    console.log("getting data 6")
    await data(6)
    

})()