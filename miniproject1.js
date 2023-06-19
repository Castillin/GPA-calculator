var arr = ['A', 'A', 'A'];
var sum = 0

function calculateGPA (){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "A") {
            sum += 100;
        } else if (arr[i] == "B") {
            sum += 80;
        } else if (arr[i] == "C") {
            sum += 70;
        } 
     }  
   avg = sum / arr.length;
    if (avg > 90) {  
        document.write("Your GPA is "+"A");
    } else if (avg > 70) {
        document.write("Your GPA is "+"B");
    } else if (avg <= 70) {
        document.write("Your GPA is "+"C");
    } 
}

calculateGPA()