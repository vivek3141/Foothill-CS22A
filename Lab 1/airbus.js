/*For this lab, create a JavaScript program that calculates the number of available
seats on the Airbus A380 airplane that has a maximum seating capacity of 555.
Because the airline will sell seats to passengers for a flight and also give out
complementary passes to employees for a flight, the total number of available
seats on that flight will be the number of tickets and passes subtracted from the
maximum seating capacity.

You must include the following:

    One or more variables to hold copyright information for your webpage.  It should include your name and the copyright year. Use console.log to display the variable(s).
    A variable to hold the maximum seating capacity of 555.
    Variables to hold the number of ticketed passengers (you select a value) and the number of complementary passes (you select a value).
    Calculate the number of available seats using these variables.
    Use console.log to display the results.
*/
var name = "Vivek Verma";
var year = 2018;
console.log(name);
console.log(year);
var maxpassengers = 555;
var passengers = 451;
var passes = 14;
var available = maxpassengers - (passengers + passes);
console.log("Availible Seats:" + available);