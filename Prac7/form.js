var nval = document.getElementById("nval");
var ageval = document.getElementById("ageval");
var emval = document.getElementById("eval");
var contact = document.getElementById("conct");
var xm = document.getElementById("x");
var xiim = document.getElementById("xii");
// var cardn = document.getElementById("cpay");
// var upiid = document.getElementById("upi");
let isNameValid = false,isAgeValid = false, isEmailValid = false, isContactValid = false,isMarkxiiValid = false,isMarkxValid = false;

document.forms["register"]["sname"].addEventListener("blur",valName);
document.forms["register"]["age"].addEventListener("blur",valAge);
document.forms["register"]["Email"].addEventListener("blur",valEmail);
document.forms["register"]["Contact"].addEventListener("blur",valContact);
document.forms["register1"]["markx"].addEventListener("blur",valMarkx);
document.forms["register1"]["markxii"].addEventListener("blur",valMarkxii);

document.forms["register"]["sname"].addEventListener("focus",nameReq);
document.forms["register"]["age"].addEventListener("focus",ageReq);
document.forms["register"]["Email"].addEventListener("focus",emailReq);
document.forms["register"]["Contact"].addEventListener("focus",contactReq);
document.forms["register1"]["markx"].addEventListener("focus",xReq);
document.forms["register1"]["markxii"].addEventListener("focus",xiiReq);

let formelems  = document.forms["register"].elements;
for (var i = 0; i < formelems.length; i++) {
        formelems[i].addEventListener("blur",checkAll);
}

function checkAll(){
    if(isNameValid && isAgeValid)
        document.getElementById("btn").disabled = false;
}

function nameReq(){
    nval.innerHTML = "Name must contain more than 1 character.";
    nval.style.color = "green";
}
function ageReq(){
    ageval.innerHTML = "Age must be between 18 to 25 years";
    ageval.style.color = "green";
}
function emailReq(){
    emval.innerHTML = "Email must have @";
    emval.style.color = "green";
}
function contactReq(){
    contact.innerHTML = "Contact Number must start with 7/8/9";
    contact.style.color = "green";
}
function xReq(){
    xm.innerHTML = "This field in mandatory*";
    xm.style.color = "green";
}
function xiiReq(){
    xiim.innerHTML = "This field in mandatory*";
    xiim.style.color = "green";
}
 function valName(){
    let s = document.forms["register"]["sname"].value;
    if(s===null || s=="" || s.length < 2){
        nval.innerHTML = "Name must contain more than 1 character.";
        nval.style.color = "red";
    }
    else{
        nval.innerHTML = "";
        isNameValid = true;
    }
}
function valAge(){
    let s = document.forms["register"]["age"].value;
    let ssplit = s.split("-");
    var year = parseInt(ssplit[0]);
    if(year < 1997 && year > 2004){
        ageval.innerHTML = "Age must be between 18 to 25 years";
        ageval.style.color = "red";
    }
    else{
        ageval.innerHTML = "";
        isAgeValid = true;
    }
}
function valEmail(){
    let s = document.forms["register"]["Email"].value;
    // let ssplit = s.split("@");
    //var year = parseInt(ssplit[0]);
    if(s.includes("@")){
         emval.innerHTML = "";
         isEmailValid = true;
        //console.log("yes");
    }
    else{
        emval.innerHTML = "Email must contain '@'";
        emval.style.color = "red";
        
    }
}
function valContact(){
    let s = document.forms["register"]["Contact"].value;
    // let ssplit = s.split("@");
    var num = parseInt(s);
    if(num < 7000000000){
        contact.innerHTML = "Contact Number must start with 7/8/9";
        contact.style.color = "red";
        //console.log("yes");
    }
    else{
        contact.innerHTML = "";
        isContactValid = true;
        
        
    }
}
function valMarkx(){
    let s = document.forms["register1"]["markx"].value;
    // let ssplit = s.split("@");
    //var num = parseInt(s);
    if(s == 0 || isNaN(s) || s===null || s===undefined){
        xm.innerHTML = "This field is mandatory";
        xm.style.color = "red";
        //console.log("yes");
    }
    else{
        xm.innerHTML = "";
        isMarkxValid = true;
        
        
    }
}
function valMarkxii(){
    let s = document.forms["register1"]["markxii"].value;
    // let ssplit = s.split("@");
    //var num = parseInt(s);
    if(s == 0 || isNaN(s) || s===null || s===undefined){
        xiim.innerHTML = "This field is mandatory";
        xiim.style.color = "red";
        //console.log("yes");
    }
    else{
        xiim.innerHTML = "";
        isMarkxiiValid = true;
        
        
    }
}
function card(){
    document.getElementById("card pay").style.visibility = "visible";
}
function upipay(){
    document.getElementById("upi pay").style.visibility = "visible";
    document.getElementById("card pay").style.visibility = "hidden";
}
