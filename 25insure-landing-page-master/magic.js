function menu(x)
{
    
    if(x==1)
    {
        document.getElementById("hamburger").style.display = "block";
        document.getElementById("closeHamburger").style.display = "none";

    }
    else if(x==0)
    {
        document.getElementById("hamburger").style.display = "none";
        document.getElementById("closeHamburger").style.display = "block";
        
    }
}

function facebook(x)
{
    
    if(x==1)
    {
        document.getElementById("facebook").src="./images/icon-facebookBlackBg.svg";
    }
    if(x==0)
    {
        document.getElementById("facebook").src="./images/icon-facebook.svg"; 
    }
}

function pinterest(x)
{
    
    if(x==1)
    {
        document.getElementById("pinterest").src="./images/icon-pinterestBlackBg.svg";
    }
    if(x==0)
    {
        document.getElementById("pinterest").src="./images/icon-pinterest.svg"; 
    }
}


function twitter(x)
{
    
    if(x==1)
    {
        document.getElementById("twitter").src="./images/icon-twitterBlackBg.svg";
    }
    if(x==0)
    {
        document.getElementById("twitter").src="./images/icon-twitter.svg"; 
    }
}

function instagram(x)
{
    
    if(x==1)
    {
        document.getElementById("instagram").src="./images/icon-instagramBlackBg.svg";
    }
    if(x==0)
    {
        document.getElementById("instagram").src="./images/icon-instagram.svg"; 
    }
}