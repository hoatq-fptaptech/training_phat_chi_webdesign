// comment
/*
    int x;
    float y;
    bool t;

    // javascript - ngoon ngữ lập trình khác
*/
var x = 10; // define variable  - x is number
var s = "hello world!"; // s is a string
//console.log(s); // print s to monitor
var t = true; // bool t = true;
var arr = []; // define an array (arr) -- int arr[10]
// arr.length -- số lượng phần tử của array
/// arr.includes(x) find x in array
if(x >= 10){
    // console.log("x = "+x);// print: x = 10
    // alert("x = "+x);
}else{
    // console.log("Less than 10");
    // alert("Less than 10");
}

for(var i=0;i<10;i++){
    // console.log("i="+i);
}

// alert("Hello everybody");
// var cf = confirm("Bạn đồng ý với yêu cầu của chúng tôi?"); // return true/false
// if(cf == true){
//     alert("Thank you!");
// }else{
//     alert("Good bye");
// }

// var n = prompt("What's your name?"); // return string
// alert("Hello "+n);

// var age = prompt("How old are you?");// str + number -> string  "18" + 1 => "181" 
// age = parseInt(age);// convert "18" to 18
// age = age +1 ; //18 + 1 => 19
// number + number 
// alert(age); // age is a string "18" # 18

// Nhập 1 số trong khoảng giá trị từ 0->99
// var num;
// do{
//     num = prompt("Enter a number from 0 to 99:");
//     num = parseInt(num);
// }while(num >= 100 || num < 0);

// alert("Num = "+num);

var randomNumber = Math.random(); // float number from 0 to 1 : 0.111 (0<random < 1)
randomNumber = parseInt(randomNumber*100);
alert(randomNumber);

// Lucky number
// người dùng nhập 5 số vào (5 số khác nhau 0 ->99), sau đó so sánh có bằng số may mắn
// ( tạo ra ngẫu nhiên) hay không
// nếu có thì chúc mừng trúng giải thưởng
// nếu cả 5 số đều không đạt -> chúc may mắn lần sau.
var chosen = []; 
var i=0;
while(chosen.length < 5){
    var op = prompt("Input a number:");
    op = parseInt(op);
    if(op >=0 && op <100){
        // var flag = false;
        // for(var j=0;j<chosen.length;i++){
        //     if(chosen[j] == op){
        //         flag = true;
        //         break;
        //     }
        // }
        // if(flag == false){  // chosen.includes(op): nếu mảng đã có số này -> true , ngược lại là false
        //     chosen[i] = op;
        //     i++;
        // }
        if(chosen.includes(op) == false){
            chosen[i] = op;
            i++;
        }
    }
}
// an array 5 elements
var lucky = false;
for(var i =0;i<chosen.length;i++){
    if(randomNumber == chosen[i]){
        alert("Chúc mừng bạn đã trúng thưởng");
        lucky = true;
        break;
    }
}
if(lucky == false){
    alert("Chúc may mắn lần sau");
}

// group number 
// cho người chơi nhập 5 số khác nhau trong khoảng 0 -> 99
// tạo ngẫu nhiên 5 số khác nhau trong khoảng 0 -> 99
// đối chiếu kết quả 2 bộ số: 
// đúng 5 số: giải jackpot
// 4 sô: giải nhất
// 3 số: giải nhì
// < 3 số: chúc may mắn lần sau

// ex: random: 1 3 5 7 9
// ch:  9 3 1 5 7 -> trúng giải

// mở rộng: mỗi người chơi sẽ có 5 lượt chơi 