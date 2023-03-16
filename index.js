var page1 = document.querySelector(".page1");
var page2 = document.querySelector(".page2");
var page3 = document.querySelector(".page3");
var page4 = document.querySelector(".page4");
var page5 = document.querySelector(".page5");
var money=0;
var amoney;
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");
var k1 = document.getElementById("k1");
var k2 = document.getElementById("k2");
var k3 = document.getElementById("k3");
var name11 = document.getElementById("name11");
var name33 = document.getElementById("name33");
var name22 = document.getElementById("name22");
var duration = document.getElementById("duration");
var selector = document.getElementById("selector");
var isToggled = 0;
var yearly = document.getElementById("yearly");
var monthly = document.getElementById("monthly");

function checker() {
  var name = document.getElementById("block1");
  var email = document.getElementById("block2");
  var number = document.getElementById("block3");

  function f1() {
    var a = document.getElementById("block1");
    a.style.border = "1.5px solid red";
    document.getElementById("out1").innerHTML = "This field is required";
  }
  function f2() {
    var a = document.getElementById("block2");
    a.style.border = "1.5px solid red";

    document.getElementById("out2").innerHTML = "This field is required";
  }
  function f3() {
    var a = document.getElementById("block3");
    a.style.border = "1.5px solid red";
    document.getElementById("out3").innerHTML = "This field is required";
  }

  if (name.value == "") {
    f1();
  }
  if (email.value == "") {
    f2();
  }
  if (number.value == "") {
    f3();
  }

  if (number.value != "" && email.value != "" && name.value != "") {
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";

    i1.style.background = "rgba(190, 227, 255,0)";
    i1.style.border = "10px solid rgba(190, 227, 255,0)";
    i1.style.webkitTextFillColor = "rgb(236,240,247)";

    i2.style.background = "rgb(190, 227, 255)";
    i2.style.border = "10px solid rgb(190, 227, 255)";
    i2.style.webkitTextFillColor = "rgb(0,0,0)";

    i3.style.background = "rgba(190, 227, 255,0)";
    i3.style.border = "10px solid rgba(190, 227, 255,0)";
    i3.style.webkitTextFillColor = "rgb(236, 240, 247)";

    i4.style.background = "rgba(190, 227, 255,0)";
    i4.style.border = "10px solid rgba(190, 227, 255,0)";
    i4.style.webkitTextFillColor = "rgb(236, 240, 247)";
  }
}
  function back1() {
    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";

    i1.style.background = "rgb(190, 227, 255)";
    i1.style.border = "10px solid rgb(190, 227, 255)";
    i1.style.webkitTextFillColor = "rgb(0,0,0)";

    i2.style.background = "rgba(190, 227, 255,0)";
    i2.style.border = "10px solid rgba(190, 227, 255,0)";
    i2.style.webkitTextFillColor = "rgb(236,240,247)";

    i3.style.background = "rgba(190, 227, 255,0)";
    i3.style.border = "10px solid rgba(190, 227, 255,0)";
    i3.style.webkitTextFillColor = "rgb(236, 240, 247)";

    i4.style.background = "rgba(190, 227, 255,0)";
    i4.style.border = "10px solid rgba(190, 227, 255,0)";
    i4.style.webkitTextFillColor = "rgb(236, 240, 247)";
  }


function back2() {
  page1.style.display = "none";
  page2.style.display = "block";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "none";

  i1.style.background = "rgba(190, 227, 255,0)";
  i1.style.border = "10px solid rgba(190, 227, 255,0)";
  i1.style.webkitTextFillColor = "rgb(236,240,247)";

  i2.style.background = "rgb(190, 227, 255)";
  i2.style.border = "10px solid rgb(190, 227, 255)";
  i2.style.webkitTextFillColor = "rgb(0,0,0)";

  i3.style.background = "rgba(190, 227, 255,0)";
  i3.style.border = "10px solid rgba(190, 227, 255,0)";
  i3.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i4.style.background = "rgba(190, 227, 255,0)";
  i4.style.border = "10px solid rgba(190, 227, 255,0)";
  i4.style.webkitTextFillColor = "rgb(236, 240, 247)";
}
function back3() {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";
    page4.style.display = "none";
    page5.style.display = "none";
  
    i1.style.background = "rgba(190, 227, 255,0)";
    i1.style.border = "10px solid rgba(190, 227, 255,0)";
    i1.style.webkitTextFillColor = "rgb(236, 240, 247)";
  
    i2.style.background = "rgba(190, 227, 255,0)";
    i2.style.border = "10px solid rgba(190, 227, 255,0)";
    i2.style.webkitTextFillColor = "rgb(236, 240, 247)";
  
    i3.style.background = "rgb(190, 227, 255)";
    i3.style.border = "10px solid rgb(190, 227, 255)";
    i3.style.webkitTextFillColor = "rgb(0, 0, 0)";
  
    i4.style.background = "rgba(190, 227, 255,0)";
    i4.style.border = "10px solid rgba(190, 227, 255,0)";
    i4.style.webkitTextFillColor = "rgb(236, 240, 247)";
  }
function next2() {
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "block";
  page4.style.display = "none";
  page5.style.display = "none";

  i1.style.background = "rgba(190, 227, 255,0)";
  i1.style.border = "10px solid rgba(190, 227, 255,0)";
  i1.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i2.style.background = "rgba(190, 227, 255,0)";
  i2.style.border = "10px solid rgba(190, 227, 255,0)";
  i2.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i3.style.background = "rgb(190, 227, 255)";
  i3.style.border = "10px solid rgb(190, 227, 255)";
  i3.style.webkitTextFillColor = "rgb(0, 0, 0)";

  i4.style.background = "rgba(190, 227, 255,0)";
  i4.style.border = "10px solid rgba(190, 227, 255,0)";
  i4.style.webkitTextFillColor = "rgb(236, 240, 247)";
}

function next3() {
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "block";
  page5.style.display = "none";

  i1.style.background = "rgba(190, 227, 255,0)";
  i1.style.border = "10px solid rgba(190, 227, 255,0)";
  i1.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i2.style.background = "rgba(190, 227, 255,0)";
  i2.style.border = "10px solid rgba(190, 227, 255,0)";
  i2.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i3.style.background = "rgba(190, 227, 255,0)";
  i3.style.border = "10px solid rgba(190, 227, 255,0)";
  i3.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i4.style.background = "rgb(190, 227, 255)";
  i4.style.border = "10px solid rgb(190, 227, 255)";
  i4.style.webkitTextFillColor = "rgb(0,0,0)";
  document.getElementById("va4").innerHTML=Mtotal+fmoney;
}

function next4() {
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "block";

  i1.style.background = "rgba(190, 227, 255,0)";
  i1.style.border = "10px solid rgba(190, 227, 255,0)";
  i1.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i2.style.background = "rgba(190, 227, 255,0)";
  i2.style.border = "10px solid rgba(190, 227, 255,0)";
  i2.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i3.style.background = "rgba(190, 227, 255,0)";
  i3.style.border = "10px solid rgba(190, 227, 255,0)";
  i3.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i4.style.background = "rgb(190, 227, 255)";
  i4.style.border = "10px solid rgb(190, 227, 255)";
  i4.style.webkitTextFillColor = "rgb(0,0,0)";
}
var fmoney;

var on=1;
var st=2;
var pr=2;
var isd="/mo";
var Mtotal=0;

function yeartheme() {

  name11.innerHTML = "$9/mo";
  name22.innerHTML = "$12/mo";
  name33.innerHTML = "$15/mo";
  yearly.style.webkitTextFillColor = "#022758";
  monthly.style.webkitTextFillColor = "rgb(142, 141, 141)";
  duration.innerHTML = "(Yearly)";
  document.getElementById("kkk41").innerHTML="(per year)"
  document.getElementById("du0").innerHTML="/yr"
  document.getElementById("va0").innerHTML=amoney;
  document.getElementById("du4").innerHTML="/yr";
  
  fmoney=amoney;

  k1.innerHTML = "+$10/yr";
  k2.innerHTML = "+$20/yr";
  k3.innerHTML = "+$20/yr";

  on=10;
  st=20;
  pr=20;
  isd="/yr";
}
function monththeme() {
  name11.innerHTML = "$90/yr";
  name22.innerHTML = "$120/yr";
  name33.innerHTML = "$150/yr";
  
  monthly.style.webkitTextFillColor = "#022758";
  yearly.style.webkitTextFillColor = "rgb(142, 141, 141)";
  duration.innerHTML = "(Monthly)";
  k1.innerHTML = "+$1/mo";
  k2.innerHTML = "+$2/mo";
  k3.innerHTML = "+$2/mo";
  document.getElementById("kkk41").innerHTML="(per month)"
  document.getElementById("du0").innerHTML="/mo"
  document.getElementById("va0").innerHTML=money;
  document.getElementById("du4").innerHTML="/mo";
  fmoney=money;

  on=1;
  st=2;
  pr=2;
  isd="/mo";
}

function toggleButton() {
  console.log(isToggled)
  isToggled = isToggled == 0 ? 1 : 0;
  if (isToggled) {
    yeartheme();
  } else {
    monththeme();
  }
  console.log(isToggled)
}

isToggled1=0;
isToggled2=0;
isToggled3=0;

function khand1() {
  isToggled1 = isToggled1 == 0 ? 1 : 0;
  if (isToggled1) {
    online();
  } else {
    noonline();
  }
}


function online()
{
  document.getElementById("kkk1").innerHTML="Online service";
  document.getElementById("du1").innerHTML=isd;
  document.getElementById("va1").innerHTML=on;
  document.getElementById("dud1").innerHTML="+$";
  Mtotal=Mtotal+on;
  document.getElementById("va4").innerHTML=Mtotal;
}
function noonline()
{
  document.getElementById("kkk1").innerHTML="";
  document.getElementById("du1").innerHTML="";
  document.getElementById("va1").innerHTML="";
  document.getElementById("dud1").innerHTML="";
}



function khand2() {
  isToggled2 = isToggled2 == 0 ? 1 : 0;
  if (isToggled2) {
    store1();
  } else {
    nostore1();
  }
}



function store1()
{
  document.getElementById("kkkk2").innerHTML="Larger storage";
  document.getElementById("du2").innerHTML=isd;
  document.getElementById("va2").innerHTML=st;
  document.getElementById("dud2").innerHTML="+$"
  Mtotal=Mtotal+st;
  document.getElementById("va4").innerHTML=Mtotal;
}
function nostore1()
{
  document.getElementById("kkkk2").innerHTML="";
  document.getElementById("du2").innerHTML=""
  document.getElementById("va2").innerHTML=""
  document.getElementById("dud2").innerHTML=""
}

function khand3() {
  isToggled3 = isToggled3 == 0 ? 1 : 0;
  if (isToggled3) {
    profile();
  } else {
    noprofile();
  }
}



function profile()
{
  document.getElementById("kkk3").innerHTML="Customizable profile";
  document.getElementById("du3").innerHTML=isd;
  document.getElementById("va3").innerHTML=pr;
  document.getElementById("dud3").innerHTML="+$";
  Mtotal=Mtotal+pr;
  document.getElementById("va4").innerHTML=Mtotal;
}
function noprofile()
{
  document.getElementById("kkk3").innerHTML="";
  document.getElementById("du3").innerHTML=""
  document.getElementById("va3").innerHTML=""
  document.getElementById("dud3").innerHTML=""
}

function sel1() {
  var s1 = document.getElementById("sec1");
  var s2 = document.getElementById("sec2");
  var s3 = document.getElementById("sec3");
  s1.style.border = "1.5px solid blue";
  s2.style.border = "1.5px solid grey";
  s3.style.border = "1.5px solid grey";
  selector.innerHTML = "Arcade";
  money=9;
  amoney=money*10;
}
function sel2() {
  var s1 = document.getElementById("sec1");
  var s2 = document.getElementById("sec2");
  var s3 = document.getElementById("sec3");
  s2.style.border = "1.5px solid blue";
  s1.style.border = "1.5px solid grey";
  s3.style.border = "1.5px solid grey";
  selector.innerHTML = "Advanced";
  money=12;
  amoney=money*10;

}
function sel3() {
  var s1 = document.getElementById("sec1");
  var s2 = document.getElementById("sec2");
  var s3 = document.getElementById("sec3");
  s3.style.border = "1.5px solid blue";
  s2.style.border = "1.5px solid grey";
  s1.style.border = "1.5px solid grey";
  selector.innerHTML = "Pro";
  money=15;
  amoney=money*10;

}
function change() {
  page1.style.display = "none";
  page2.style.display = "block";
  page3.style.display = "none";
  page4.style.display = "none";

  i1.style.background = "rgba(190, 227, 255,0)";
  i1.style.border = "10px solid rgba(190, 227, 255,0)";
  i1.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i2.style.background = "rgb(190, 227, 255)";
  i2.style.border = "10px solid rgb(190, 227, 255)";
  i2.style.webkitTextFillColor = "rgb(0,0,0)";

  i3.style.background = "rgba(190, 227, 255,0)";
  i3.style.border = "10px solid rgba(190, 227, 255,0)";
  i3.style.webkitTextFillColor = "rgb(236, 240, 247)";

  i4.style.background = "rgba(190, 227, 255,0)";
  i4.style.border = "10px solid rgba(190, 227, 255,0)";
  i4.style.webkitTextFillColor = "rgb(236, 240, 247)";
}

