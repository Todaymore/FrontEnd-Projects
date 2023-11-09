function openMenu(x)
{
    if(x==1)
    {
        document.getElementById("hamburger").style.display = "none";    
        document.getElementById("closeIcon").style.display = "block";   
        document.getElementById("menuExpand").style.display = "block";   
          
        
    }
    if(x==0)
    {
        document.getElementById("hamburger").style.display = "block";    
        document.getElementById("closeIcon").style.display = "none"; 
        document.getElementById("menuExpand").style.display = "none";   
        
    }
    
}


function menuSubOptions(x)
{
    if(window.innerWidth>=1024)
    {
        if(x==0)
        {
    
            
            document.getElementById("menu11").style.display = "block";
            document.getElementById("CloseSubMenu11").style.display = "flex";
            document.getElementById("OpenSubMenu11").style.display = "none";
            menuSubOptions2(1);
            menuSubOptions3(1);
        }
    
        
        if(x==1)
        {
    
            document.getElementById("menu11").style.display = "none";
            document.getElementById("CloseSubMenu11").style.display = "none";
            document.getElementById("OpenSubMenu11").style.display = "flex";
        }

    }
    else
    {
    if(x==0)
    {

    
        document.getElementById("menu1").style.display = "block";
        document.getElementById("CloseSubMenu1").style.display = "flex";
        document.getElementById("OpenSubMenu1").style.display = "none";
        menuSubOptions2(1);
        menuSubOptions3(1);
    }

    
    if(x==1)
    {

        document.getElementById("menu1").style.display = "none";
        document.getElementById("CloseSubMenu1").style.display = "none";
        document.getElementById("OpenSubMenu1").style.display = "flex";
    }
 }

}

function menuSubOptions2(x)
{

    if(window.innerWidth>=1024)
    {
        if(x==0)
        {
    
            document.getElementById("menu22").style.display = "block";
            document.getElementById("CloseSubMenu22").style.display = "flex";
            document.getElementById("OpenSubMenu22").style.display = "none";
            menuSubOptions(1);
            menuSubOptions3(1);
        }
    
        if(x==1)
        {
    
            document.getElementById("menu22").style.display = "none";
            document.getElementById("CloseSubMenu22").style.display = "none";
            document.getElementById("OpenSubMenu22").style.display = "flex";
        }

    }

    else
    {
    if(x==0)
    {

        document.getElementById("menu2").style.display = "block";
        document.getElementById("CloseSubMenu2").style.display = "flex";
        document.getElementById("OpenSubMenu2").style.display = "none";
        menuSubOptions(1);
        menuSubOptions3(1);
    }

    if(x==1)
    {

        document.getElementById("menu2").style.display = "none";
        document.getElementById("CloseSubMenu2").style.display = "none";
        document.getElementById("OpenSubMenu2").style.display = "flex";
    }
  }

}


function menuSubOptions3(x)
{
    if(window.innerWidth>=1024)
    {

        if(x==0)
        {
    
            document.getElementById("menu33").style.display = "block";
            document.getElementById("CloseSubMenu33").style.display = "flex";
            document.getElementById("OpenSubMenu33").style.display = "none";
            menuSubOptions(1);
            menuSubOptions2(1);
        }
    
        if(x==1)
        {
    
            document.getElementById("menu33").style.display = "none";
            document.getElementById("CloseSubMenu33").style.display = "none";
            document.getElementById("OpenSubMenu33").style.display = "flex";
        }
    }
    else
    {
        if(x==0)
        {
    
            document.getElementById("menu3").style.display = "block";
            document.getElementById("CloseSubMenu3").style.display = "flex";
            document.getElementById("OpenSubMenu3").style.display = "none";
            menuSubOptions(1);
            menuSubOptions2(1);
        }
    
        if(x==1)
        {
    
            document.getElementById("menu3").style.display = "none";
            document.getElementById("CloseSubMenu3").style.display = "none";
            document.getElementById("OpenSubMenu3").style.display = "flex";
        }

    }
}