function btnclick(val)
{
   document.getElementById("outscreen").value=document.getElementById("outscreen").value+val; 
}


function clearscreen()
{
    document.getElementById("outscreen").value=" ";

}
function equalClick()
{
    var text=document.getElementById("outscreen").value
    var result=eval(text)
    document.getElementById('outscreen').value=result
}