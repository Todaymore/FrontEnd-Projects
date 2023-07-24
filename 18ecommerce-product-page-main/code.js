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