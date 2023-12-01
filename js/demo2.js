var h = document.getElementById("head1");
h.innerText = "Hello Everybody";
h.style.color = "red";
h.style.backgroundColor = "gray"; // background-color
var deg = 0;
// setInterval(function(){
//     deg += 10;
//     var h = document.getElementById("head1");
//     h.style.transform = `rotate(${deg}deg)`;
// },10);

// h.innerHTML = "<i>Hello Everybody</i>"

h.innerText += "World!";
// tạo 1 chuyển động xoay tròn.

setInterval(function(){
    var h = document.getElementById("head1");
    deg += 10;
    // h.innerText += deg;
},1000);

var min = 10;
var sec = 0;

function timer(){
    var countdown = setInterval(function(){
        // print min -> span 1
        var span1 = document.getElementById("span-min");
        span1.innerText = min;
        // print sec -> span 2
        var span2 = document.getElementById("span-sec");
        span2.innerText = sec;

        sec--;
    if(sec < 0){
            min--;
            sec = 59;
    }
    if(min < 0){
            clearInterval(countdown);
    }
    },100);
}
// event
var date = new Date(); // now 
var h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); 

// 14:51:25

// Lucky Number
// Cho người chơi chọn 5 số ( cách 5s mới chọn tiếp)
// sau khi chọn 1 số xong, hiển thị số vừa chọn ra giao diện
// Cuối cùng công bố con số may mắn và thông báo kết qủa