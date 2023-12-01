// defind function
function notify(){
   // alert("Notify..");

}
//notify();

// delay 2000 ms
// setTimeout(notify,2000);// 2000 miliseconds

//setInterval(notify,2000);//infinite loop function

// 10:00
// 9:59
// 9:58

var min = 10;
var sec = 0;

// var f = true;

var countdown = setInterval(function(){
    console.log(min+":"+sec);
    sec--;
   if(sec < 0){
        min--;
        sec = 59;
   }
   if(min < 0){
        clearInterval(countdown);
   }
},100);

