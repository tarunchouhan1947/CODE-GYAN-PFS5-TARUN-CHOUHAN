const apikey="df24653e969b5ae3e3495cb3b55fbc37"
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search=document.querySelector(".box input")
const button=document.querySelector(".box button")

async function checkweather(city){
    const response= await fetch(url+city+`&appid=${apikey}`)
    var data=await response.json()
    console.log(data)
    document.querySelector(".t").innerHTML=data.main.temp
    document.querySelector(".n").innerHTML=data.name
    document.querySelector(".h").innerHTML=data.main.humidity
    document.querySelector(".w").innerHTML=data.wind.speed
}
button.addEventListener('click',()=>{
    checkweather(search.value)
})
