function Calculate() {

    
    // alert("Button Test");
    let fn = parseFloat(document.getElementById("txtFirstNumber").value);
   
   document.getElementById("txtSecondNumber").value = 2*(22/7)*fn;
    
   document.getElementById("txtThirdNumber").value = (22/7)*fn*fn;
}


