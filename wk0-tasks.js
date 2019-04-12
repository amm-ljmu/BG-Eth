/* Task1: Repeating Numbers */
var repeatNumbers = function(data){
        var outputString = "";
        for(var i = 0; i < data.length; i++){
                var count = 0;
                var a, b, inner;
                // Get array dimensions
                for(var j = 0; j < data[i].length; j++){
                        if(count === 0)
                                a = data[i][j];
                        else
                                b = data[i][j];
                        count +=1;
                }
                // Build string
                //console.log("a = " + a + ", b = " + b);
                for(var c = 0; c < b; c++){
                        outputString += a;
                }
                outputString += ", "
        }
        // Return string
        //console.log("Output: "+outputString);
        return outputString;
}
// Print out answers
console.log("Task 1");
console.log(repeatNumbers([[1,10]]));
console.log(repeatNumbers([[1,2],[2,3]]));
console.log(repeatNumbers([[10,4],[34,6],[92,2]]));


/* Task 2: Conditional Sums */
var conditionalSum = function(values, condition){
        var total = 0;
        for(var i = 0; i < values.length; i++){
                // Check for "odd" / "even" conditions
                if(condition === "even"){
                        // Add to total if condition met
                        if(values[i] %2 === 0){
                                total += values[i];
                        }
                }
                else {
                        // Add to total if condition met
                        if(values[i] %2 !== 0){
                                total += values[i];
                        }
                }
        }
        //console.log(total);
        return total;
}
// Print out answers
console.log("");
console.log("Task 2");
console.log(conditionalSum([1,2,3,4,5], "even"));
console.log(conditionalSum([1,2,3,4,5], "odd"));
console.log(conditionalSum([13,88,12,44,99], "even"));
console.log(conditionalSum([], "odd"));



/* Task 3: Talking Calendar */
var talkingCalendar = function(date){
        var dateString = "";
        var outputYear = "";
        var outputMonth = "";
        var outputDay = "";
        var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // Split the input string to separate day, month, year for checking
        var yearMonthDay = date.split("/",3);
        outputYear = yearMonthDay[0];
        outputMonth = months[parseInt(yearMonthDay[1])];
        switch(yearMonthDay[2]){
                case "01": outputDay = "1st"; break;
                case "02": outputDay = "2nd"; break;
                case "03": outputDay = "3rd"; break;
                case "04":
                case "05":
                case "06":
                case "07":
                case "08":
                case "09": outputDay = parseInt(yearMonthDay[2],10)+"th"; break;
                case "21": outputDay = "21st"; break;
                case "22": outputDay = "22nd"; break;
                case "23": outputDay = "23rd"; break;
                case "31": outputDay = "31st"; break;
                default: outputDay = yearMonthDay[2]+"th"; break;
        }
        // Build string
        dateString = outputMonth + " " + outputDay + ", " + outputYear;
        return dateString;
}
// Print out answers
console.log("");
console.log("Task 3");
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/05/24"));



/* Task 4: Change Calculator */
var calculateChange = function(total, cash){
        var outputString = "";
        var denominationValues = [1,5,10,25,100,200,500,1000,2000];
        var denominationStrings = ["penny:", "nickel:", "dime:", "quarter:", "one dollar:", "two dollars:", "five dollars:", "ten dollars:", "twenty dollars:"];
        var denominationsUsed =  [0,0,0,0,0,0,0,0,0];
        var change = cash - total;
        var changeTemp = change;
        for(var i = denominationValues.length-1; i >= 0; i--){
                //console.log("Change needed:"+changeTemp+"Current denomination: "+denominationValues[i]);
                // Take the denomination from the amount of change to see if this one can be used
                while(changeTemp > 0) {
                        changeTemp = changeTemp - denominationValues[i];
                        if(changeTemp >= 0)
                                denominationsUsed[i] += 1;

                        //console.log("changeTemp:"+changeTemp+", taken away:"+denominationValues[i]);
                }
                // Add the last one back as negative result was required to break out of while
                changeTemp += denominationValues[i];
        }
        // Format the output string
        //console.log("denominationsUsed: "+denominationsUsed.toString());
        for(var a = denominationsUsed.length - 1; a >= 0; a--) {
                if(denominationsUsed[a] != 0){
                        //console.log(denominationStrings[a]+denominationsUsed[a]);
                        outputString += denominationStrings[a]+denominationsUsed[a]+", ";
                }
        }
        outputString = "{ "+outputString+" }";
        return outputString;
};
// Print out answers
console.log("");
console.log("Task 4");
console.log(calculateChange(1787,2000));
console.log(calculateChange(2623,4000));
console.log(calculateChange(501,1000));

