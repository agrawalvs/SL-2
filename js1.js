function var_count(str) {
    var vowel_count = 0;
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' ){
            vowel_count = vowel_count + 1;
        }
    }
    return vowel_count;
}
let str = window.prompt("Enter a string : ");
alert(var_count(str));
