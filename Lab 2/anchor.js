/*For this lab, you can use any webpage on the Internet of your choosing, but please provide the url of that page in a comment at the top of your JavaScript file.

Create a JavaScript program that includes the following:

    A function called anchorTotal that uses console.log to display the number of anchor tags on the page (see the example from the practice above).  Call the anchorTotal function.
    A function called anchorList that uses a loop to display all of the anchor tags on the page with only one console.log statement.  You can choose which loop you prefer.  Call the anchorList function.
    A function called anchorReverse.  You must use a backward loop for this (do not use the reverse method for arrays). The output of this function should display all of the anchor tags in reverse order.  Call the anchorReverse function.
*/
function anchorTotal() {
    var myLinks = document.getElementsByTagName("a");
    console.log("Links", myLinks.length);
}

function anchorList() {
    var myLinks = document.getElementsByTagName("a");
    for (var i = 0; i < myLinks.length; i++) {
        console.log(myLinks[i]);
    }
}

function anchorReverse() {
    var myLinks = document.getElementsByTagName("a");
    for (var i = myLinks.length - 1; i >= 0; i--) {
        console.log(myLinks[i]);
    }
}

anchorTotal();
anchorList();
anchorReverse();