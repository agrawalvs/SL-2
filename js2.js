var j=0;
var str2="";
var str1="";
function palin(str){
    for(var i = str.length-1; i>=0; i--){
        str1 += str[i]; 
        j++;
    }
    j = 0;
    for( i = 0; i<=str.length-1; i++){
        str2 += str[i];
        j++; 
    }
    j=0;

    if(str1 == str2){
        alert("It is a palindrome");
    }
    else{
        alert("It is not a palindrome");
    }



}
var str = window.prompt("Enter a number: ")
palin(str)




