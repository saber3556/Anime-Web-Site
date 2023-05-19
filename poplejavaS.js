 $(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 40) {
            $('#scroll').fadeIn();
        }else{
            $('#scroll').fadeOut();
        }
    })



     $("#scroll").click(function(){
         $('html,body').animate({scrollTop : 0},800)
     })
 })

//Mode Nuit
const main = document.querySelector('main')
const conter=document.getElementById('conter')
conter.onclick = function(){
    conter.classList.toggle('active')
    main.classList.toggle('active')
}
 /*var scroll=document.getElementById("scroll")
window.onscroll=function(){
    
    if (window.pageYOffset >300) {
        scroll.style.display="block"
    }else {
        scroll.style.display="none"
        
    }
}
scroll.onclick=function(){
    window.scrollTo(0,0)
    
}*/

//text ANIME


//function befor(){
    //return"";
   
//}

var arabic=document.getElementById("arabic")
var fr=document.getElementById("frensh")
var tra=document.getElementById("tar")
var tra1=document.getElementById("TRA1")
var tra2=document.getElementById("TRA2")
var tra3=document.getElementById("TRA3")
var tra4=document.getElementById("TRA4")
var tra5=document.getElementById("TRA5")
var tra6=document.getElementById("TRA6")
var tra7=document.getElementById("TRA7")
var tra8=document.getElementById("TRA8")
var tra9=document.getElementById("TRA9")
var tra10=document.getElementById("TRA10")
var tra11=document.getElementById("TRA11")
var button1=document.getElementById("button1")
var tra12=document.getElementById("TRA12")
var button2=document.getElementById("button2")
var tra13=document.getElementById("TRA13")
var tra14=document.getElementById("TRA14")
var tra15=document.getElementById("TRA15")
var tra16=document.getElementById("TRA16")
var tra17=document.getElementById("TRA17")




tra.onclick=()=>{
    transform("tar")
}
tra1.onclick=()=>{
   transform("tra1") 
    }
tra1.onclick=()=>{
    transform("tra2") 
    }
   
   

arabic.onclick=()=>{
    transform("arabic")
    tra6.style.padding="25px 40px"
    tra7.style.padding="25px 48px"
    
}
function transform(getlang){
    if(getlang==="arabic"){
tar.innerHTML=".....الحصول على حلقات أنمي الحرة"
tra1.innerHTML=" الرئيسية"
tra2.innerHTML=" الشخصيات"
tra3.innerHTML=" اخر الأخبار"
tra4.innerHTML=" تواصل معنا"
tra5.innerHTML=" مساعدة"
tra6.innerHTML="         اللغات       "
tra7.innerHTML=" الفئات"
tra8.innerHTML=" التصفح"
tra9.innerHTML=" مشاهدة وتحميل بجودة عالية"
tra10.innerHTML=" .كل شيىء عن الأنمي هنا :الحلقات والشخصيات والأخبار وكل شيء"
tra11.innerHTML=" غموض"
button1.innerHTML=" تحميل المزيد"
button2.innerHTML=" تحميل المزيد"
arabic.innerHTML="العربية "
fr.innerHTML=" الفرنسية"
tra13.innerHTML=" هجوم العمالقة"
tra14.innerHTML=" رياضة"
tra15.innerHTML=" تسجيل الدخول"
tra16.innerHTML=" غموض"
tra17.innerHTML=" رياضة"
    }else if(getlang==="frentsh"){

    }

}

var sectio=document.getElementById("android")
var user=navigator.userAgent.toLocaleLowerCase()
var app=document.getElementById("app_down")

app.addEventListener("click",()=>{
    window.open("https://play.google.com/store/apps/details?id=com.shiyar&h1=ar","_blank")
})
//sectio.addEventListener("load",()=>{
   // sectio.style.display="flex"
   
//})
var reapt=setInterval(()=>{
    sectio.style.display="flex"
},5000)


var clos=document.getElementById("close")
clos.addEventListener("click",()=>{
    sectio.style.display="none"
  
})

//thise partie for vidio (change vidio)
var butun=document.getElementById("button1")
var chow=document.getElementById("show1")
var chow2=document.getElementById("show2")
var chow15=document.getElementById("show15")
var chow16=document.getElementById("show16")
var chow17=document.getElementById("show17")
var chow18=document.getElementById("show18")
var chow19=document.getElementById("show19")
var chow20=document.getElementById("show20")
var chow21=document.getElementById("show21")
var chow22=document.getElementById("show22")
var chow23=document.getElementById("show23")
var chow24=document.getElementById("show24")
var chow25=document.getElementById("show25")

butun.addEventListener("click",()=>{
    chow.style.display="block"
    butun.addEventListener("click",()=>{
        chow2.style.display="block"
        butun.addEventListener("click",()=>{
            chow15.style.display="block"
            butun.addEventListener("click",()=>{
                chow16.style.display="block"
                butun.addEventListener("click",()=>{
                    chow17.style.display="block"
                    butun.addEventListener("click",()=>{
                        chow18.style.display="block"
                        butun.addEventListener("click",()=>{
                            chow19.style.display="block"
                            butun.addEventListener("click",()=>{
                                chow20.style.display="block"
                                butun.addEventListener("click",()=>{
                                    chow21.style.display="block"
                                    butun.addEventListener("click",()=>{
                                        chow22.style.display="block"
                                        butun.addEventListener("click",()=>{
                                            chow23.style.display="block"
                                            butun.addEventListener("click",()=>{
                                                chow24.style.display="block"
                                                butun.addEventListener("click",()=>{
                                                    chow25.style.display="block"
                                                    butun.style.display="none"
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
                
            })
          
     


    var butun2=document.getElementById("button2")
var chow3=document.getElementById("show3")
var chow4=document.getElementById("show4")
var chow26=document.getElementById("show26")
var chow27=document.getElementById("show27")
var chow28=document.getElementById("show28")
var chow29=document.getElementById("show29")
var chow30=document.getElementById("show30")
var chow31=document.getElementById("show31")
var chow32=document.getElementById("show32")
var chow33=document.getElementById("show33")
var chow34=document.getElementById("show34")
var chow35=document.getElementById("show35")
butun2.addEventListener("click",()=>{
    chow3.style.display="block"
    butun2.addEventListener("click",()=>{
        chow4.style.display="block"
        butun2.addEventListener("click",()=>{
            chow26.style.display="block"
            butun2.addEventListener("click",()=>{
            chow27.style.display="block"
            butun2.addEventListener("click",()=>{
                chow28.style.display="block"
                butun2.addEventListener("click",()=>{
                    chow29.style.display="block"
                    butun2.addEventListener("click",()=>{
                        chow30.style.display="block"
                        butun2.addEventListener("click",()=>{
                            chow31.style.display="block"
                            butun2.addEventListener("click",()=>{
                                chow32.style.display="block"
                                butun2.addEventListener("click",()=>{
                                    chow33.style.display="block"
                                    butun2.style.display="none"
                                })
                            })
                        })
                    })
                })
                })
            })
        })
    
    })
    })

    var butun3=document.getElementById("button3")
var chow5=document.getElementById("show5")
var chow6=document.getElementById("show6")
butun3.addEventListener("click",()=>{
    chow5.style.display="block"
    butun3.addEventListener("click",()=>{
        chow6.style.display="block"
        butun3.style.display="none"
    })
    })

    var butun4=document.getElementById("button4")
    var chow7=document.getElementById("show7")
    var chow8=document.getElementById("show8")
    butun4.addEventListener("click",()=>{
        chow7.style.display="block"
        butun4.addEventListener("click",()=>{
            chow8.style.display="block"
            butun4.style.display="none"
        })
        })

        var butun5=document.getElementById("button5")
        var chow9=document.getElementById("show9")
        var chow10=document.getElementById("show10")
        butun5.addEventListener("click",()=>{
            chow9.style.display="block"
            butun5.addEventListener("click",()=>{
                chow10.style.display="block"
                butun5.style.display="none"
            })
            })

            var butun6=document.getElementById("button6")
            var chow11=document.getElementById("show11")
            var chow12=document.getElementById("show12")
            butun6.addEventListener("click",()=>{
                chow11.style.display="block"
                butun6.addEventListener("click",()=>{
                    chow12.style.display="block"
                    butun6.style.display="none"
                })
                })

                var butun7=document.getElementById("button7")
                var chow13=document.getElementById("show13")
                var chow14=document.getElementById("show14")
                butun7.addEventListener("click",()=>{
                    chow13.style.display="block"
                    butun7.addEventListener("click",()=>{
                        chow14.style.display="block"
                        butun7.style.display="none"
                    })
                })
