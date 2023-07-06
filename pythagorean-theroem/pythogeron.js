function Cal(){
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
    let sn = parseFloat(document.getElementById("txtSecondNumber").value);

    document.getElementById("txtThirdNumber").value = ((fn*fn)+(sn*sn))**(1/2);
}