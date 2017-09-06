  var psGal = document.getElementById("ps"), illGal = document.getElementById("ill"), appGal = document.getElementById("app");

  var forward = document.getElementById("arrowButtonR"), backward = document.getElementById("arrowButtonL");

var photoShop = ["riverP.jpg", "shepP.png", "montuckyP.png", "leninP.jpg", "nozzleP.jpg", "soundShieldP.jpg", "thrustReverserP.jpg","hogJohnson.jpg"];

var illustrator = ["Redington.jpg","wagsWagonI.jpg", "theUsualI.jpg", "shepI.png", "muirI.jpg", "hootI.jpg", "hoot7I.jpg", "hoot6I.jpg", "hoot5I.jpg", "hoot4I.png", "hoot3I.jpg", "hoot2I.jpg", "hookSetI.jpg", "genI.jpg", "exploreWinterI.jpg", "exploreSummerI.jpg", "evolutionOfWinterI.jpg", "chinI.jpg", "fishCtI.jpg"];

var apps = ["checkTheFlowsA.png", "importVisA.jpg", "smithA.png", "songMapA.png", "bullTrout.png"];

var placeHolder = ["placeHolder.png"];

var category = placeHolder;
var iter = 0;
show();

psGal.onclick = function() {
    category = photoShop;
    iter = 0;
    show();
}

illGal.onclick = function() {
    category = illustrator;
    iter = 0;
    show();
}

appGal.onclick = function() {
    category = apps;
    iter = 0;
    show();
}

backward.onclick = function() {
    iter --;
    if (iter<0){
    iter = category.length-1;
    }
    show();
};
forward.onclick = function() {
    iter ++;
    if (iter>category.length-1){
    iter = 0;
    }
    show();
};
function show() {
    document.getElementById("gallery").src = "photos/" + category[iter];
    document.getElementById("count").innerHTML = (iter+1) + "/" + category.length;
}
