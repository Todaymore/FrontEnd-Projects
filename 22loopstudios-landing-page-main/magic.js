function menu(a)
{
    if(a==1)
    {
        
        document.getElementById("wholePage").style.display="none";
        document.getElementById("menu").style.display="inline-block";
    }
    if(a==0)
    {

        document.getElementById("menu").style.display="none";
        document.getElementById("wholePage").style.display="block";
        
    }
}