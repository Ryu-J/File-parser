var inbuff = new FileReader();

inbuff.onload = function() {
    var contents = inbuff.result;
    document.getElementById("testP").innerHTML = "File contents: <br>" + contents;
};

inbuff.onerror = function() {
    alert("File could not be read!");
};

function getText() {
    var selectedFile = document.getElementById('inputfile').files[0];
    inbuff.readAsText(selectedFile);
}