function var_count(str) {
    var vowel_count = 0;
    for (var i = 0; i < str.length; i++) {
        // if (str[i] == "a"|| "A"|| "e"|| "E"|| "i"|| "I"|| "o"|| "O"|| "u"|| "U") 
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U'){
            vowel_count = vowel_count + 1;
        }
    }
    return vowel_count;
}
let str = window.prompt("Enter a string : ");
console.log(var_count(str));
// var x = var_count(Decide what the main topic of the paragraph will be Before you begin writing your paragraph you must have a clear idea of what the paragraph will be about This is because a paragraph is essentially a collection of sentences that all relate to one central topic Without a definite idea of what the main topic is your paragraph will lack focus and unity To determine the exact topic of your paragraph you should ask yourself many questions);