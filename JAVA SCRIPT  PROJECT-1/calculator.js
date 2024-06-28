let screen=document.querySelector('.screen')
let buttons=document.querySelectorAll('.btn')
let euqal=document.querySelector('.btn-equal')
let clear=document.querySelector('.btn-clear')


buttons.forEach((button)=>{
   button.addEventListener('click',(event)=>{
    let value=event.target.dataset.num
    screen.value=screen.value+value


   })
   euqal.addEventListener('click',(event)=>{
    if(screen.value===""){
        screen.value=""
    }else{
        total=eval(screen.value)
        screen.value=total;

    }
    

})


    clear.addEventListener('click',(event)=>{
        screen.value=""
    })
  
})
