function clearScreen()
{
    document.getElementById("field").value="";
}
function clearOne()
{
    var s=document.getElementById("field").value;
    var s=s.substring(0,s.length-1);
    document.getElementById('field').value=s;
}
function display(value)
{
    document.getElementById("field").value+=value;
}
function cal()
{
    var p=document.getElementById("field").value;
    var q=eval(p);
    document.getElementById("field").value=q;
}