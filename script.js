

function submit() {
    var a = document.getElementById("1med").value;
    var b = document.getElementById("2med").value;
    var c = document.getElementById("3med").value;
    var d = document.getElementById("4med").value;

    var ab = a * 2;
    var bb = b * 2;
    var cb = c * 3;
    var db = d * 3;

    var medtresbi = (600 - ab)/8;
    var meddoisbi = (600 - (ab+bb))/6;
    var medumbi = (600 - (ab+bb+cb))/3;
    var results = ab + bb + cb + db;
    var finals = (600 - results) / 3;

    var a = 1;
    document.getElementById("grade").innerHTML = results + " pontos";
    if (b + c + d == 0) {
        document.getElementById("medness").innerHTML = medtresbi + " nas médias seguintes";
    } else if (c + d == 0) {
        document.getElementById("medness").innerHTML = meddoisbi + " nas médias seguintes";
    } else if (d == 0) {
        document.getElementById("medness").innerHTML = medumbi + " nas médias seguintes";
        document.getElementById("bool").innerHTML = "";
        document.getElementById("prv_fin").innerHTML = "";
    } else if (d != 0) {
        document.getElementById("medness").innerHTML = "";
        if (results < 600) {
        document.getElementById("bool").innerHTML = "prova final";
        document.getElementById("prv_fin").innerHTML = finals + " ponto(s) para passar";
        } else if (results >= 600) {
        document.getElementById("bool").innerHTML = "passou :D";
        document.getElementById("prv_fin").innerHTML = "";
    }
    }
    

    
}
