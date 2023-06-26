function Add() {
    // alert("Button Test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);

    document.getElementById("txtResult").value = fn + sn;
}

function Sub() {
    // alert("Button Test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);

    document.getElementById("txtResult").value = fn - sn;
}

function Multiply() {
    // alert("Button Test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);

    document.getElementById("txtResult").value = fn * sn;
}

function Divide() {
    // alert("Button Test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);

    document.getElementById("txtResult").value = fn / sn;
}

function Exponent() {
    // alert("Button Test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);

    document.getElementById("txtResult").value = fn ** sn;
}

