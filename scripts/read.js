//  Creates the file reader buffer to read local files
var inbuff = new FileReader();

inbuff.onload = function() {
    var contents = inbuff.result;
    var parseString = document.getElementById("parseString").value;
    parseString = parseString.trim();
    parseString = parseString.toLowerCase();
    //  Only parse for a string if the user entered a value to parse for
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

//  Parses the text from the file the user chooses using the string the user chooses
function parseFile() {
    //  Only parse if the user chose a file
    if (document.getElementById('inputfile').files.length > 0) {
        var selectedFile = document.getElementById('inputfile').files[0];
        inbuff.readAsText(selectedFile);
    }
    else {
        alert("Please choose a file to parse!");
    };
};

// Par
function parseText(ptext, pstring) {
    //  split the words into an array
    var strings = ptext.split(" ");
    var newString = "";
    //  go through each word to check for the pstring
    for (var i = 0; i < strings.length; i++) {
        //  the current word is the same as pstring
        if (strings[i].toLowerCase() === pstring) {
                newString = newString.concat("<span style='color:red;'>" + strings[i] + "</span> ");
        }
        //  the current word is not the same as pstring
        else {
            newString = newString.concat(strings[i] + " ");
        };
        //  add extra newlines when a new line character is in the current word
        if (strings[i].indexOf("\n") != -1) {
            newString = newString.concat("<br><br>");
        };
    };
    //  output the results to the paragraph with id testP
    document.getElementById("testP").innerHTML = "File contents: <br>" + newString;
};