function vowels(str){
    var str1 = str.toLowerCase();
    let vcount = 0;
    for(var i=0;i<str1.length;i++){
        if(str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u")
            vcount+=1;
    }
        
    return vcount;
}

var str = "AEIOUaeiou";
console.log(`Count of vowel =${vowels(str)}`);