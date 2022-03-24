var u1 = "Nguyen";
var u2 = "Thanh";
var u3 = "Pham";
var u4 = "Thanh";
var u5 = "Tam";


//Array 
var userList = ["Nguyen","Thanh","Pham", "Thanh","Tam" ];

for(var i = 0 ; i < userList.length ; i++){
    console.log(userList[i]);
}

// console.log(userList[0]);
// console.log(userList[1]);
// console.log(userList[2]);
// console.log(userList[3]);
// console.log(userList[4]);
// console.log(userList.length - 1);



//cho phép tạo ra mảng rỗng
var numberList = [];


//Push thêm phần tử vào mảng
numberList.push(10);
numberList.push(11);
numberList.push(17);
numberList.push(19);
numberList.push(04);


console.log(numberList);


//Khai báo mảng
var numberList = [];
//
document.getElementById("btnThemSo").onclick = function(){

//Lấy giá trị từ người dùng
    var number = document.getElementById("txtNumber4").value * 1;
  //thêm number vào mảng numberLisst
  numberList.push(number);
  
  console.log(numberList);

   
};

/**
 * Tổng chẵn
 */

document.getElementById("btnTongChan").onclick = function (){
var tong = 0;
for (var i = 0 ; i< numberList.length ; i ++ ) {
    console.log(numberList[i]);
    if (numberList[i]%2 === 0) {
        tong +=numberList[i];
    }
    
}
console.log(tong);
};

///Đếm số âm
document.getElementById("btnDemSoAm").onclick = function(){
    for (var i  = 0; i < numberList.length; i++) {
        count ++ ;
        
    }


};