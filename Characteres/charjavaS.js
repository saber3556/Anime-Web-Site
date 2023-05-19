/*أنشاء عداد (counter) لحساب عدد اللايكات */
var net=document.getElementById("nett")
var contur=document.getElementById("contur1")
var counter=0
net.addEventListener("click",()=>{
    counter++
    contur.innerText=counter
})
var net1=document.getElementById("nett1")
var contur2=document.getElementById("contur2")
var counter2=0
net1.addEventListener("click",()=>{
    counter2++
    contur2.innerText=counter2
})
var net2=document.getElementById("nett2")
var contur3=document.getElementById("contur3")
var counter3=0
net2.addEventListener("click",()=>{
    counter3++
    contur3.innerText=counter3
})

