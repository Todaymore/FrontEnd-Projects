
    function dateOfBirth()
    {
      const d = new Date();
      let curDay = d.getDate(); //get the current day number

      let curMonth = d.getMonth(); //get the current month number
      curMonth += 1;
     
      let curYear = d.getFullYear(); //get the current year number

      var day = document.getElementById("DD").value;
      var month=document.getElementById("MM").value;
      var year=document.getElementById("YYYY").value;


      day = parseInt(day);
      month = parseInt(month);
      year = parseInt(year);

      
      let one = isNaN(day);
      let two = isNaN(month);
      let three = isNaN(year);

      



       // checking year
      if(year>curYear||year<1900)
        {
         if(year>curYear)
            {
              document.getElementById("validYear").style.display="inline";
            }
         else
            {
              document.getElementById("validYear").style.display="inline";
              document.getElementById("validYear").innerHTML = "You are old enough to die!";
            }

          document.getElementById("labelD").style.color="hsl(0, 100%, 67%)"; 
          document.getElementById("labelM").style.color="hsl(0, 100%, 67%)";
          document.getElementById("labelY").style.color="hsl(0, 100%, 67%)";
          document.getElementById("DD").style.border="1px solid hsl(0, 100%, 67%)";
          document.getElementById("MM").style.border="1px solid hsl(0, 100%, 67%)"; 
          document.getElementById("YYYY").style.border="1px solid hsl(0, 100%, 67%)"; 
        }



        //checking month
      if(month>12||month<1)
        {
         document.getElementById("labelD").style.color="hsl(0, 100%, 67%)"; 
         document.getElementById("labelM").style.color="hsl(0, 100%, 67%)";
         document.getElementById("labelY").style.color="hsl(0, 100%, 67%)";
         document.getElementById("DD").style.border="1px solid hsl(0, 100%, 67%)";
         document.getElementById("MM").style.border="1px solid hsl(0, 100%, 67%)"; 
         document.getElementById("YYYY").style.border="1px solid hsl(0, 100%, 67%)";  
         document.getElementById("validMonth").style.display="inline";
        }


   //checking day
      if(day>31||day<1)
        {
         document.getElementById("labelD").style.color="hsl(0, 100%, 67%)"; 
         document.getElementById("DD").style.border="1px solid hsl(0, 100%, 67%)"; 
         document.getElementById("validDay").style.display="inline";
        }
      else if(day==31&&(month==2||month==4||month==6||month==9||month==11))
        {
            document.getElementById("labelD").style.color="hsl(0, 100%, 67%)"; 
            document.getElementById("labelM").style.color="hsl(0, 100%, 67%)";
            document.getElementById("labelY").style.color="hsl(0, 100%, 67%)";
            document.getElementById("DD").style.border="1px solid hsl(0, 100%, 67%)";
            document.getElementById("MM").style.border="1px solid hsl(0, 100%, 67%)"; 
            document.getElementById("YYYY").style.border="1px solid hsl(0, 100%, 67%)";  
            document.getElementById("validDay").style.display="inline";
         }

      else  if((day==30&&month==2)||(day==29&&((year%100==0 && year%400!=0)||(year%4!=0))))
         {
            document.getElementById("labelD").style.color="hsl(0, 100%, 67%)"; 
            document.getElementById("labelM").style.color="hsl(0, 100%, 67%)";
            document.getElementById("labelY").style.color="hsl(0, 100%, 67%)";
            document.getElementById("DD").style.border="1px solid hsl(0, 100%, 67%)";
            document.getElementById("MM").style.border="1px solid hsl(0, 100%, 67%)"; 
            document.getElementById("YYYY").style.border="1px solid hsl(0, 100%, 67%)";  
            document.getElementById("validDay").style.display="inline";
         }

      else if(one||two||three) {
         document.getElementById("labelD").style.color="hsl(0, 100%, 67%)"; 
         document.getElementById("labelM").style.color="hsl(0, 100%, 67%)";
         document.getElementById("labelY").style.color="hsl(0, 100%, 67%)";
         document.getElementById("DD").style.border="1px solid hsl(0, 100%, 67%)";
         document.getElementById("MM").style.border="1px solid hsl(0, 100%, 67%)"; 
         document.getElementById("YYYY").style.border="1px solid hsl(0, 100%, 67%)"; 
      }
      else
         {
            if(curDay>=day) {

                
                if(curMonth>=month) {

                  
                  if((curDay==day&&curMonth==month))
                  {
                     let year1=curYear-year-1;
                     if(year1<-1)
                     {
                        document.getElementById("D").innerHTML = "You are not ready to come on earth";
                     }
                     else if(year1==-1)
                     {
                        document.getElementById("output").style.color="hsl(0, 100%, 67%)";
                        document.getElementById("output").innerHTML = "Happy Birthday!";
                     }
                     else
                     {
                        day = curDay-day;
                        month = curMonth-month;
                        year = curYear-year;
                        document.getElementById("D").innerHTML = day;
                        document.getElementById("M").innerHTML = month;
                        document.getElementById("Y").innerHTML = year;
                        document.getElementById("validMonth").innerHTML = "Happy Birthday!";
                        document.getElementById("validMonth").style.display="inline";
                     }
                     
                  }
                  
                }
                else {
                  year = curYear-year-1;
                  if(year<0)
                  {
                     document.getElementById("D").innerHTML = "You are not ready to come on earth";
                  }
                  else
                  {
                     month = (12-month)+curMonth;
                     day = curDay-day;
                     document.getElementById("D").innerHTML = day;
                     document.getElementById("M").innerHTML = month;                 
                     document.getElementById("Y").innerHTML = year;

                  }

                  
                }
                
            }
            else
            {
                day -= curDay;
                if(curMonth>month)
                {
                  document.getElementById("D").innerHTML = day; 
                  month = curMonth-month;
                  year = curYear-year;
                     document.getElementById("D").innerHTML = day;
                     document.getElementById("M").innerHTML = month;
                     document.getElementById("Y").innerHTML = year;
                }
                else
                {                
                  month = (12-month)+curMonth;
                  year = curYear-year-1;
                  if(year<0)
                  {
                     document.getElementById("D").innerHTML = "You are not ready to come on earth";
                  }
                  else
                  {
                     document.getElementById("D").innerHTML = day;
                     document.getElementById("M").innerHTML = month;
                     document.getElementById("Y").innerHTML = year;
                  }

                }
                
            }
            
         }
     
     

      
         


         if(one)
         {
            document.getElementById("validDay").style.display="inline";
            document.getElementById("validDay").innerHTML="This field is required";

         }
   
         if(two)
         {
            document.getElementById("validMonth").style.display="inline";
            document.getElementById("validMonth").innerHTML="This field is required";
         }
   
         if(three)
         {
            document.getElementById("validYear").style.display="inline";
            document.getElementById("validYear").innerHTML="This field is required";
         }
    
    }
   