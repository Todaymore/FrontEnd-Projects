var items=0; //items select each time
var goesToCart=0; //items already present in cart + new items added to the cart
var open_Closed=true; //cartPage open/closed
var currentImage = 0; //display image using previous and next button
//open side menu
function openMenu()
{
    document.getElementById("menu").style.display = "block";
    document.getElementById("whole").style.opacity = "0.3";
    
}

//close side menu
function closeMenu()
{
    document.getElementById("menu").style.display = "none";
    document.getElementById("whole").style.opacity = "1";

}

//items increase or decrease in selection before sending to cart 

function countItems(x)
{
  
  if(items==0&&x==-1)
  {
    items=0;
  }
  else
  {
    items = items + x;
  }

  document.getElementById("totalSneakers").innerHTML = items; 
}

//items added to cart after clicking on the cart button
function addToCart()
{
  if(items>0)
  {
    goesToCart += items;
    document.getElementById("addedItems").innerHTML = goesToCart;
    document.getElementById("noOfProd").innerHTML = goesToCart;
    document.getElementById("totalPrice").innerHTML = "$"+(goesToCart*125).toFixed(2);
    document.getElementById("addedItems").style.display="inline";

    document.getElementById("emptyCart").style.display = "none";
    open_Closed = true;//it gives not the error but one thing wrong:
                       //user used to double click while closing cart
  }
  
}


//open cart page depends cart is empty or not
function cartPage()
{

  if(items==0)
  {
    document.getElementById("emptyCart").style.display = "inline";
    document.getElementById("fullCart").style.display = "none";
  
  }
  else
  {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("fullCart").style.display = "inline";
  
  }

  if(open_Closed==true)
  {
    open_Closed = false;
  }
  else
  {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("fullCart").style.display = "none";
   
    open_Closed = true;
  }
}


//delete items from the cart and open the empty cart and close the full cart
function deleteItems()
{
  
 items=0;
 document.getElementById("fullCart").style.display = "none";
 open_Closed=true;
  cartPage();

  goesToCart=0;
  document.getElementById("addedItems").style.display="none";
  document.getElementById("totalSneakers").innerHTML = 0; 

}


//center picture change and next picture picture takes its position
function imageRotator(x)
{
  currentImage+=x;
  if(currentImage>3)
   {
     currentImage=0;
   }

  if(currentImage<0)
  {
     currentImage=3;
  }

  
   if(currentImage==0)
   {
      document.getElementById("zeroImage").style.display="block";
      document.getElementById("firstImage").style.display="none";
      document.getElementById("secondImage").style.display="none";
      document.getElementById("thirdImage").style.display="none";
   }
   if(currentImage==1)
   {
      document.getElementById("zeroImage").style.display="none";
      document.getElementById("firstImage").style.display="block";
      document.getElementById("secondImage").style.display="none";
      document.getElementById("thirdImage").style.display="none";
   }
   if(currentImage==2)
   {
      document.getElementById("zeroImage").style.display="none";
      document.getElementById("firstImage").style.display="none";
      document.getElementById("secondImage").style.display="block";
      document.getElementById("thirdImage").style.display="none";
   }
   if(currentImage==3)
   {
      document.getElementById("zeroImage").style.display="none";
      document.getElementById("firstImage").style.display="none";
      document.getElementById("secondImage").style.display="none";
      document.getElementById("thirdImage").style.display="block";
   }

   

}

//gives decoration to thumbnail images and call function "imageRotator(x)".
//to rotate central image according to user clicked on thumbnail
function thumbnailEffect(x)
{
  
   currentImage = 0;
   imageRotator(x);
  
   if(x==0)//so there no substitute of onclick js in css so we continue with this 2 line for every 8 line in each if statement
   {
      document.getElementById("zerothumbnail").style.border="2px solid orange";
      document.getElementById("zerothumbnail").style.opacity="0.3";
      document.getElementById("firstthumbnail").style.border="none";
      document.getElementById("firstthumbnail").style.opacity="1";
      document.getElementById("secondthumbnail").style.border="none";
      document.getElementById("secondthumbnail").style.opacity="1";  
      document.getElementById("thirdthumbnail").style.border="none";
      document.getElementById("thirdthumbnail").style.opacity="1";
   }
   if(x==1)
   {
    document.getElementById("zerothumbnail").style.border="none";
    document.getElementById("zerothumbnail").style.opacity="1";
    document.getElementById("firstthumbnail").style.border="2px solid orange";
    document.getElementById("firstthumbnail").style.opacity="0.3";
    document.getElementById("secondthumbnail").style.border="none";
    document.getElementById("secondthumbnail").style.opacity="1";  
    document.getElementById("thirdthumbnail").style.border="none";
    document.getElementById("thirdthumbnail").style.opacity="1";
   }
   if(x==2)
   {
    document.getElementById("zerothumbnail").style.border="none";
    document.getElementById("zerothumbnail").style.opacity="1";
    document.getElementById("firstthumbnail").style.border="none";
    document.getElementById("firstthumbnail").style.opacity="1";
    document.getElementById("secondthumbnail").style.border="2px solid orange";
    document.getElementById("secondthumbnail").style.opacity="0.3";  
    document.getElementById("thirdthumbnail").style.border="none";
    document.getElementById("thirdthumbnail").style.opacity="1";
   }
   if(x==3)
   {
    document.getElementById("zerothumbnail").style.border="none";
    document.getElementById("zerothumbnail").style.opacity="1";
    document.getElementById("firstthumbnail").style.border="none";
    document.getElementById("firstthumbnail").style.opacity="1";
    document.getElementById("secondthumbnail").style.border="none";
    document.getElementById("secondthumbnail").style.opacity="1";  
    document.getElementById("thirdthumbnail").style.border="2px solid orange";
    document.getElementById("thirdthumbnail").style.opacity="0.3";
   }
}

//open lightbox when user clicks on central image make background opacityed
function lightBox()
{
  
   document.getElementById("whole").style.opacity="0.3";
   
   document.getElementById("lightboxAppear").style.display="block";
   
}

function closeLightBox()
{
 
   document.getElementById("whole").style.opacity="1";
   
   document.getElementById("lightboxAppear").style.display="none";
   
}


{
  previous = document.getElementById("previousLightBox");
  next = document.getElementById("nextLightBox");
  closedd = document.getElementById("closeLBox");
  previous.addEventListener("mouseenter", function(){previous.src= "images/icon-previous stroke-orange.svg";});
  previous.addEventListener("mouseleave", function(){previous.src= "images/icon-previous.svg";});

  next.addEventListener("mouseenter", function(){next.src= "images/icon-next stroke-orange.svg";});
  next.addEventListener("mouseleave", function(){next.src= "images/icon-next.svg";});
  closedd.addEventListener("mouseenter", function(){closedd.src= "images/icon-close white.svg";});
  closedd.addEventListener("mouseleave", function(){closedd.src= "images/icon-close.svg";});
}















//center picture change and next picture picture takes its position
function imageRotato(x)
{
  currentImage+=x;
  if(currentImage>3)
   {
     currentImage=0;
   }

  if(currentImage<0)
  {
     currentImage=3;
  }

  
   if(currentImage==0)
   {
      document.getElementById("zeroImag").style.display="block";
      document.getElementById("firstImag").style.display="none";
      document.getElementById("secondImag").style.display="none";
      document.getElementById("thirdImag").style.display="none";
   }
   if(currentImage==1)
   {
      document.getElementById("zeroImag").style.display="none";
      document.getElementById("firstImag").style.display="block";
      document.getElementById("secondImag").style.display="none";
      document.getElementById("thirdImag").style.display="none";
   }
   if(currentImage==2)
   {
      document.getElementById("zeroImag").style.display="none";
      document.getElementById("firstImag").style.display="none";
      document.getElementById("secondImag").style.display="block";
      document.getElementById("thirdImag").style.display="none";
   }
   if(currentImage==3)
   {
      document.getElementById("zeroImag").style.display="none";
      document.getElementById("firstImag").style.display="none";
      document.getElementById("secondImag").style.display="none";
      document.getElementById("thirdImag").style.display="block";
   }

   

}

//gives decoration to thumbnail images and call function "imageRotator(x)".
//to rotate central image according to user clicked on thumbnail
function thumbnailEffec(x)
{
  
   currentImage = 0;
   imageRotato(x);
  
   if(x==0)//so there no substitute of onclick js in css so we continue with this 2 line for every 8 line in each if statement
   {
      document.getElementById("zerothumbnai").style.border="2px solid orange";
      document.getElementById("zerothumbnai").style.opacity="0.3";
      document.getElementById("firstthumbnai").style.border="none";
      document.getElementById("firstthumbnai").style.opacity="1";
      document.getElementById("secondthumbnai").style.border="none";
      document.getElementById("secondthumbnai").style.opacity="1";  
      document.getElementById("thirdthumbnai").style.border="none";
      document.getElementById("thirdthumbnai").style.opacity="1";
   }
   if(x==1)
   {
    document.getElementById("zerothumbnai").style.border="none";
    document.getElementById("zerothumbnai").style.opacity="1";
    document.getElementById("firstthumbnai").style.border="2px solid orange";
    document.getElementById("firstthumbnai").style.opacity="0.3";
    document.getElementById("secondthumbnai").style.border="none";
    document.getElementById("secondthumbnai").style.opacity="1";  
    document.getElementById("thirdthumbnai").style.border="none";
    document.getElementById("thirdthumbnai").style.opacity="1";
   }
   if(x==2)
   {
    document.getElementById("zerothumbnai").style.border="none";
    document.getElementById("zerothumbnai").style.opacity="1";
    document.getElementById("firstthumbnai").style.border="none";
    document.getElementById("firstthumbnai").style.opacity="1";
    document.getElementById("secondthumbnai").style.border="2px solid orange";
    document.getElementById("secondthumbnai").style.opacity="0.3";  
    document.getElementById("thirdthumbnai").style.border="none";
    document.getElementById("thirdthumbnai").style.opacity="1";
   }
   if(x==3)
   {
    document.getElementById("zerothumbnai").style.border="none";
    document.getElementById("zerothumbnai").style.opacity="1";
    document.getElementById("firstthumbnai").style.border="none";
    document.getElementById("firstthumbnai").style.opacity="1";
    document.getElementById("secondthumbnai").style.border="none";
    document.getElementById("secondthumbnai").style.opacity="1";  
    document.getElementById("thirdthumbnai").style.border="2px solid orange";
    document.getElementById("thirdthumbnai").style.opacity="0.3";
   }
}