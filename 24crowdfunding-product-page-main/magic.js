function showPledges(x){
    
    if(x==1)
    {
        document.getElementById("pledgeOptions").style.display = "block";
        document.getElementById("outerDiv").style.filter = "brightness(50%)";
        humburgerMenu(0); //this function call close the humburger menu incase we left it open
    }
    else
    {
        document.getElementById("pledgeOptions").style.display = "none";
        document.getElementById("outerDiv").style.filter = "brightness(100%)";
    
    }
   }

function radioCollection(){
    
    if(document.getElementById("noReward").checked)
    {
        
        document.getElementById("div3A").style.border ="2px solid #32b4ab";
        document.getElementById("div3B").style.border = "1px solid  rgb(156 163 175)";
        document.getElementById("div3C").style.border = "1px solid  rgb(156 163 175)";
        document.getElementById("payDiv3B").style.display = "none";
        document.getElementById("payDiv3C").style.display = "none";
        thankyouPage(1);

        
    }
    else if(document.getElementById("pledge25").checked)
    {
        document.getElementById("div3B").style.border ="2px solid #32b4ab";
        document.getElementById("div3A").style.border = "1px solid  rgb(156 163 175)";
        document.getElementById("div3C").style.border = "1px solid  rgb(156 163 175)";
        document.getElementById("payDiv3B").style.display = "block";
        document.getElementById("payDiv3C").style.display = "none";
        
    }
    else if(document.getElementById("pledge75").checked)
    {
        
        document.getElementById("div3C").style.border ="2px solid #32b4ab";
        document.getElementById("div3A").style.border = "1px solid  rgb(156 163 175)";
        document.getElementById("div3B").style.border = "1px solid  rgb(156 163 175)";
        document.getElementById("payDiv3C").style.display = "block";
        document.getElementById("payDiv3B").style.display = "none";
        
    }
}

function thankyouPage(x)
{
    
    if(x==1)
    {
        document.getElementById("pledgeOptions").style.display = "none";
        document.getElementById("thankyou").style.display = "block";

    }
    else
    {
        
        document.getElementById("thankyou").style.display = "none";  
       // document.getElementById("outerDiv").style.filter = "brightness(100%)";
        location.reload(true);
    }
    
}

function humburgerMenu(x)
{
    if(x==1)
    {
        document.getElementById("humburger").style.display = "block";
        document.getElementById("closeIcon").style.display = "block";
        document.getElementById("humburgerIcon").style.dispay = "none";
   }
    else if(x==0)
    {
        document.getElementById("humburger").style.display = "none";
        document.getElementById("closeIcon").style.display = "none";
        document.getElementById("humburgerIcon").style.dispay = "block";
    }
}

function bookmark(x)
{
    if(x==1)
    {
        document.getElementById("whiteBookmark").style.display = "block";
        document.getElementById("grayBookmark").style.display = "none";
   
    }
    else
    {
        document.getElementById("whiteBookmark").style.display = "none";
        document.getElementById("grayBookmark").style.display = "block";
   
    }
}