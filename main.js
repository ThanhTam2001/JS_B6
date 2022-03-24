/**
 * while
 *
 */

var n = 0;
while (n < 5) {
  // Thực thi hành động
  console.log("Hello các bạn");

  // Bước nhảy
  n++;
}
/*

document.getElementById("btnSubmit").onclick = function (){
    var number = document.getElementById("txtNumber").value;
    var count = 0;
    var content = "";
    while(munber > 1){
        // Vừa tính kết quả vừa là bước nhảy
        number = Math.floor (number / 2);
        count ++;
        content += "<p>Count: "+ count + " - " + "num:" + number + "</p>";

    }

    // in kết quả
    document.getElementById("footerKetQua").innerHTML= content;
};*/

/**
 * Do whiles
 */

var m = 0;
do {
  //Bước nhảy
  m++;
  console.log("Hello !!!");
} while (m < 5);

/*
document.getElementById("btnSubmit2").onclick = function (){
    var number = document.getElementById("txt_number2").value;

    var tong = 0;
    var count = 1;

    do {
        tong += count;
        count ++;
    } while (count <= number);

    document.getElementByTd("footerCard2").innerHTML = tong ;
};

*/

/**
 * For
 */

// for (  var i= 0; i < 5; i++) {
//     console.log("hello");

// }

document.getElementById("btnSubmit3").onclick = function () {
  var number = document.getElementById("txtNumber3").value;
  var sochan = "";
  var sole = "";
  for (var i = 0; i < number; i++) {
    if (i % 2 === 0) {
      //chan
      sochan += i + " ";
    } else {
      //Le
      sole += i + " ";
    }
  }
  console.log(sochan);
  console.log(sole);
};

function demoVonglapLong() {
  var content = "";
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      content += "*";
    }
    content += "\n";
  }
  console.log(content);
}

demoVonglapLong();

function demoBreak() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i > 5) {
      break;
    }
  }
}
demoBreak();

function demoContinute() {
  for (var i = 0; i < 10; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }
}
demoContinute();

function demoReturn() {
  if (1 === 1) {
    console.log("Hello Cybersoft");
    return;
  }
  console.log("Hello you");
}

demoReturn();



