var inbuff = new FileReader();

inbuff.onload = function() {
    var contents = inbuff.result;
    parseText(contents);
};

inbuff.onerror = function() {
    alert("File could not be read!");
};

function getText() {
    var selectedFile = document.getElementById('inputfile').files[0];
    inbuff.readAsText(selectedFile);
};

function parseText(ptext) {
    "use strict";
    var strings = ptext.split(" ");
    var newString = "";
    for (let element of strings) {
        if (element.toLowerCase() === "ipsum") {
                newString = newString.concat("<span style='color:red;'>" + element + "</span> ");
        }
        else {
            newString = newString.concat(element + " ");
        };
    };
    document.getElementById("testP").innerHTML = "File contents: <br>" + newString;
};