x=[];
y=[];


function scd(){
var cont1=document.getElementById("container")
cont1.style.display="grid"
var newdiv=document.createElement("div")
newdiv.textContent="ITEM NAME"
cont1.appendChild(newdiv)
var newdiv=document.createElement("div")
newdiv.textContent="ITEM PRICE"
cont1.appendChild(newdiv)

for(i=0;i<x.length;i++){
    var itemname=document.createElement("div")
    itemname.textContent=x[i]
    cont1.append(itemname)

    var itemprice=document.createElement("div")
    itemprice.textContent=y[i]
    cont1.append(itemprice)
}

    var totalprice=document.createElement("div")
    totalprice.textContent="TOTAL PRICE"
    cont1.append(totalprice)

    var value=document.createElement("div")
    value.textContent=  add()
    cont1.append(value)

function add(){
    sum=0//y[i] has values, i starts from 0 iteration and it is limited to y.length ,and continues until the condition is met if if x.length is 2,2 2 iterations
    for(i=0;i<y.length;i++){
         sum=sum+y[i]
}
return sum;

    }

}

function storevalue(name,price){
    x.push(name);
    y.push(price);
}
