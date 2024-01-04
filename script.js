

function submit() {
    var a = document.getElementById("1med").value;
    var b = document.getElementById("2med").value;
    var c = document.getElementById("3med").value;
    var d = document.getElementById("4med").value;

    var ab = a * 2;
    var bb = b * 2;
    var cb = c * 3;
    var db = d * 3;

    var results = ab + bb + cb + db;
    var finals = (600 - results) / 3;

    var a = 1;
    document.getElementById("grade").innerHTML = results;
    if (results < 600) {
        document.getElementById("bool").innerHTML = "prova final";
        document.getElementById("prv_fin").innerHTML = finals
    } else {
        document.getElementById("bool").innerHTML = "passou :D";
    }
}