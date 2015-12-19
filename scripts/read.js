var inbuff = new FileReader();

inbuff.onload = function() {
    var contents = inbuff.result;
    var parseString = document.getElementById("parseString").value;
    parseString = parseString.trim();
    parseString = parseString.toLowerCase();
    if (parseString.length > 0) {
        parseText(contents, parseString);
    }
    else {
        alert("Please enter a string to parse!");
    };
};

inbuff.onerror = function() {
    alert("File could not be read!");
};

function getText() {
    if (document.getElementById('inputfile').files.length > 0) {
        var selectedFile = document.getElementById('inputfile').files[0];
        inbuff.readAsText(selectedFile);
    }
    else {
        alert("Please choose a file to parse!");
    };
};

function parseText(ptext, pstring) {
    "use strict";
    var strings = ptext.split(" ");
    var newString = "";
    for (let element of strings) {
        if (element.toLowerCase() === pstring) {
                newString = newString.concat("<span style='color:red;'>" + element + "</span> ");
        }
        else {
            newString = newString.concat(element + " ");
        };
        if (element.indexOf("\n") != -1) {
            newString = newString.concat("<br><br>");
        };
    };
    document.getElementById("testP").innerHTML = "File contents: <br>" + newString;
};