$("#txtPWVerified").blur(function(){
    var p1 = $('#txtPassword').text;
    var p2 = $('#txtPWVerified').text;
    if (!(p1 === p2)){
        alert("Passwords need to match!");
    }
    });


