/*To accomplish this, create an object called client.  This object must have two properties: firstName and lastName.  Set the values for these two properties.
Then, create function called updateClent that can update a client object to add one new contact phone number to the object.  The parameter list must include a client object, a phone number and a string as the type of contact.  This string would hold something like "Home" or "Work" or "Mobile" or "fax" as the type of contact phone number.

The function body should then add the contact type as a new property for the client object.  For example, let's say I had already created an object called client, then called the updateClient function with this function call:

updateClient(client, "777-555-3333", "Mobile");

I would expect the updateClient function to add a new property called "Mobile" to the client object and set its value equal to "777-555-3333".

Make several function calls similar to the example above to add additional contact types and corresponding phone numbers to the client object.

Important Note: You might have noticed that the order of the parameters in the parentheses is not the same order as in the demonstration video.  This is because I want to see that you can change the order of parameters in a function and still make it work.  You will lose points if you use the order shown in the demonstration video.  To get full points for this lab, you must be able to call the updateClient function with this statement: updateClient(client, "777-555-3333", "Mobile");
Finally, use console.log to display all of the client object's property names and values.  Use a for...in loop to accomplish this.*/

client = {firstName: "Vivek", lastName: "Verma"};
function updateClient(obj, val, key){
    obj[key] = val;
}
updateClient(client, "777-555-3333", "Mobile");
updateClient(client, "vivekverma@company.com", "E-Mail");
updateClient(client, "1111 ABC Drive , Los Angeles", "Address");

for(key in client){
    console.log(key, " : ", client[key]);
}