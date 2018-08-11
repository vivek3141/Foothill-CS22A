var allImages = document.getElementsByTagName("img");
var mainImage = allImages[1];
var front = allImages[0];
var back = allImages[2];
var listImg = ['./center.jpg','./IslandOasis.jpg','./LakeShore.jpg','./MountainView.jpg','./NewHaven.jpg','./SanDiego.jpg'];
var index = 0;

front.onclick =  function() {
    mainImage.setAttribute("src", listImg[index]);
    index++;
    if(index >= listImg.length){
        index = 0;
    }

};

back.onclick =  function() {
    mainImage.setAttribute("src", listImg[index]);
    index--;
    if(index < 0){
        index = listImg.length-1;
    }
};