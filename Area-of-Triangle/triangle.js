function add()
{
    let fn = parseFloat(document.getElementById("txta1").value);
    let sn = parseFloat(document.getElementById("txta2").value); 

    document.getElementById("txta3").value = (1/2)*fn*sn;

}