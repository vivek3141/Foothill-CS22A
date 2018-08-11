
function xmlFunc(d, i){
    var l1 = d.getElementsByTagName("name");
    var l2 = d.getElementsByTagName("phone");
    for(var i = 0; i < l1.length; i++){
        $("#aboutUs").append(l1[i].childNodes[0].nodeValue + " : " + l2[i].childNodes[0].nodeValue + "<br />");
    }
}

$.get("listings.html", function(d, i){$("#aboutUs").append(d);});
$.get("realtors.xml", xmlFunc)