"use strict";

if (location.pathname == "/chat")
 getChat();

function startChat() {
    $('#body').load('/chat');
    getChat();
}

function getChat() {
    setTimeout(function () {
        $("#loading").fadeOut();
        //setTimeout(function () {
        //    var script = document.createElement("script");
        //    script.type = "text/javascript";
        //    script.src = "~/js/chat.js";
        //    document.getElementById("chat").appendChild(script);
        //    return false;
        //}, 500)
        setTimeout(function () {
            $("#block").removeClass("none");
        }, 1000)
    }, 1000);
}

function hideBlock() {
    var hidden = $("#block").hasClass("text-block");
    console.log(hidden)
    if (!hidden) {
        $("#block").addClass("none");
        $("#block").addClass("text-block");
        $("#block").removeClass("chat-start");
        $("#userInput").fadeOut();
        $("#sendButton").html("Skicka");
        $("textarea").html("");
        $("label.label").each(function () {
            $(this).addClass("none");
        })
        setTimeout(function () {
             $("#block, #msg").removeClass("none");
        }, 500)
    }
}

function newChat() {
    console.log("newchat")
}
