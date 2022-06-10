function Grade(marks){
    if(marks<66 && marks>49)
        console.log("C");
    if(marks<81 && marks>65)
        console.log("B");
    if(marks<91 && marks>79)
        console.log("A");
    if(marks>90)
        console.log("A+");
}

Grade(91);