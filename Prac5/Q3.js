function reverse(num){
    var sum=0;
    while(num<1){
    var rem=num%10;    
    sum=sum*10+rem;    
    num/=10;
    }
    return sum;
}

function isPalindrome(num){
    var rev = reverse(num);
    if(rev == num)
        return "true";
    else
        return "false";
}

var num = 1581;
console.log(reverse(num));
console.log(isPalindrome(num));