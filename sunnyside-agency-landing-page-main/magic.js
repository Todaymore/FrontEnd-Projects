function menuOpen(a)
{
    
    if(a==1)
    {   
         document.getElementById("menu").style.display = "block";    
         document.getElementById("closedMenu").style.display = "block";
         document.getElementById("openedMenu").style.display = "none"; 
    }
    if(a==0)
    {   
         document.getElementById("menu").style.display = "none";    
         document.getElementById("closedMenu").style.display = "none";
         document.getElementById("openedMenu").style.display = "block"; 
         
    }
}

function whiteFill(a)
{
     
   if(a==1)
   {
     document.getElementById("imageOne").src="/images/icon-facebookWhite.svg";
   }
   if(a==2)
   {
     document.getElementById("imageTwo").src="/images/icon-instagramWhite.svg";
   }
   if(a==3)
   {
     document.getElementById("imageThree").src="/images/icon-twitterWhite.svg";
   }
   if(a==4)
   {
     document.getElementById("imageFour").src="/images/icon-pinterestWhite.svg";
   }
}

function normalFill(a)
{
     if(a==1)
     {
          document.getElementById("imageOne").src="/images/icon-facebook.svg";
     }
     if(a==2)
     {
          document.getElementById("imageTwo").src="/images/icon-instagram.svg";
     }
     if(a==3)
     {
          document.getElementById("imageThree").src="/images/icon-twitter.svg";
     }
     if(a==4)
     {
          document.getElementById("imageFour").src="/images/icon-pinterest.svg";
     }
}