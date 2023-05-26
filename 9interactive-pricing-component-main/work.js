
function pageAndPrice()
{
    
   let getValue=document.getElementById('selectPages').value;
   let yearlyDiscount = document.getElementById('yearlyPlan').checked;
 
   if(getValue==1)
   {

      if(yearlyDiscount)
      {
        document.getElementById('price').innerHTML = "$6.00";
      }
      else
      {
        document.getElementById('price').innerHTML = "$8.00";
      }
      document.getElementById('pageNums').innerHTML = "10k PAGEVIEWS";
      document.getElementById('price').style.marginLeft="165px";
      document.getElementById('selectPages').style.backgroundColor="white"; 
      document.getElementById('selectPages').style. background="linear-gradient( to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 0%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100% )";
   }
   else if(getValue==2)
   {
      if(yearlyDiscount)
        {
            document.getElementById('price').style.marginLeft="158px";
            document.getElementById('price').innerHTML = "$9.00";
        }
        else
        {
            document.getElementById('price').style.marginLeft="148px";
            document.getElementById('price').innerHTML = "$12.00";
        }
            document.getElementById('pageNums').innerHTML = "50k PAGEVIEWS";
      
            document.getElementById('selectPages').style.backgroundColor="white"; 
            document.getElementById('selectPages').style. background="linear-gradient( to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 25%, hsl(224, 65%, 95%) 25%, hsl(224, 65%, 95%) 100% )";
   }
   else if(getValue==3)
   {

        if(yearlyDiscount)
        {
            document.getElementById('price').innerHTML = "$12.00";
        }
        else
        {
            document.getElementById('price').innerHTML = "$16.00"; 
        }
        document.getElementById('pageNums').innerHTML = "100k PAGEVIEWS";
        document.getElementById('price').style.marginLeft="140px";
        document.getElementById('selectPages').style.backgroundColor="white"; 
        document.getElementById('selectPages').style. background="linear-gradient( to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%, hsl(224, 65%, 95%) 100% )";
   }
   else if(getValue==4)
   {
      if(yearlyDiscount)
      {
        document.getElementById('price').innerHTML = "$18.00";
      }
      else
      {
        document.getElementById('price').innerHTML = "$24.00";
      }
      document.getElementById('price').style.marginLeft="135px";
      document.getElementById('pageNums').innerHTML = "500k PAGEVIEWS";
      document.getElementById('selectPages').style.backgroundColor="white"; 
      document.getElementById('selectPages').style. background="linear-gradient( to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 75%, hsl(224, 65%, 95%) 75%, hsl(224, 65%, 95%) 100% )";
   }
   else
   {
    document.getElementById('selectPages').style.backgroundColor="green"; 
     if(yearlyDiscount)
      {

        document.getElementById('price').innerHTML = "$27.00";
      }
      else
      {
        document.getElementById('price').innerHTML = "$36.00";
      }
      document.getElementById('pageNums').innerHTML = "1M PAGEVIEWS";
      document.getElementById('price').style.marginLeft="150px";

      document.getElementById('selectPages').style. background="linear-gradient( to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 100% )";
 
   }

}

if (screen.width < 600) {
  alert("screen is working");
}


