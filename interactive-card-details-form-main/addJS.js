var newName = "";
var newCardNo = "";
var newYear = "";
var newMonth = "";
var newCvc ="";

function copyName()
{
     newName = document.getElementById('name').value;
     document.getElementById('nameOnCard').innerHTML = newName;
    // alert(newName);
}



function copyCardNo()
{
     newCardNo = document.getElementById('cardNo').value;
     document.getElementById('numOnCard').innerHTML = newCardNo;
}



//we can't erase if/else statement from copyMonth and copyYear and 
//we want to erase becuase I have doubt that MM value doesn't get deleted even we erase from its field and then press button
//becuase if it got erased then it's field color turn red, which is not happening
//lets meets tomorrow...
function copyMonth()
{
     newMonth = document.getElementById('MM').value;
    // newYear = document.getElementById('YY').value; checkSss
   /* if(newYear.length==0)         checkSss
    {
        if(newMonth.length==0)
        {
            newMonth="00/00"
        }
        else
        {
            newMonth+="/00";
        }
        
    }
    else
    {
        newMonth+="/"+newYear;
    }
     checkSss */                  
    document.getElementById('dateOnCard').innerHTML = newMonth;

}

function copyYear()
{
    // newMonth = document.getElementById('MM').value; checkSss
     newYear = document.getElementById('YY').value;
     if(newMonth.length==0)
     {
        document.getElementById('dateOnCard').innerHTML = newYear;
     }
     else if(newYear.length==0)
     {
        ;
     }
     else
     {
        document.getElementById('dateOnCard').innerHTML = newMonth+"/"+newYear;
     }
     /*     checkSss
    if(newMonth.length==0||newMonth=="00")
    {
        if(newYear.length==0)
        {
            newMonth="00/00"
        }
        else
        {
            newYear="00/"+newYear;
            document.getElementById('dateOnCard').innerHTML = newYear;
        }
        
    }
    else
    {
        newMonth+="/"+newYear;
        document.getElementById('dateOnCard').innerHTML = newMonth;
    }
    
   checkSss */ 
    //newMonth=null;
    //newYear=null;
}



function copyCvc()
{
    newCvc = document.getElementById('Cvc').value;
    document.getElementById('cvcOnCard').innerHTML = newCvc;
}


function checkBefore()
{
    let errorCoin = "";
    let errorCoin2 = "";
    let checkEverthing = true;//if everything is fine then submit and move to the next page
    
    let nameError1 = "It can't be blank";
    let nameError2 = "Wrong format, alphabets and space only";
    let cardError1 = "It can't be blank";
    let cardError2 = "Wrong format, numbers and space only";
    let monthError1 = "It can't be blank";
    let monthError2 = "Wrong format,";
    let yearError1 = "It can't be blank";
    let yearError2 = "Wrong format,";
    let cvcError1 = "It can't be blank";
    let cvcError2 = "Wrong format,";

    //(/^[-_ a-zA-Z0-9]+$/)   /^[-_ 0-9]+$/
    let cardRegex =  /^[-_ 0-9]+$/;   // /^[0-9]+$/;for digits only
    let monthRegex = /^([0-9]{2})$/;  // /^([0-9]{2})$/; for 2 digits only
    let yearRegex = /^([0-9]{2})$/;
    let cvcRegex = /^([0-9]{3})$/;
    let nameRegex =   /^[-_ a-zA-Z0-9]+$/; // /^[A-za-z]+$/;


    if(newName=="")
    {
            document.getElementById('name').style.borderColor="red";
            document.getElementById('name').style.marginBottom="45px";
            document.getElementById('nameError').style.display="block";
            document.getElementById('nameError').innerHTML = nameError1;

            checkEverthing = false;

    }
    else if(!newName.match(nameRegex))
    {
            document.getElementById('name').style.borderColor="red";
            document.getElementById('name').style.marginBottom="45px";
            document.getElementById('nameError').style.display="block";
            document.getElementById('nameError').innerHTML = nameError2; 

            checkEverthing = false; 
                
    }
    else
    {
        document.getElementById('name').style.borderColor="hsl(270, 3%, 87%)";
        document.getElementById('name').style.marginBottom="25px";
        document.getElementById('nameError').style.display="none";
        errorCoin="only";
    }
    

    
    if(newCardNo.length==0)
    {
        document.getElementById('cardNo').style.borderColor="red";
        document.getElementById('cardNo').style.marginBottom="45px";
        document.getElementById('cardNumError').style.display="block";
        document.getElementById('cardNumError').innerHTML = cardError1;

        checkEverthing = false;
        //for vertically aligning error code 
        {

        if(errorCoin=="only")
        {
            document.getElementById('cardNumError').style.top="175px";
        }
        else
        {
            document.getElementById('cardNumError').style.top="195";
        }

        }

    }
    else if(!newCardNo.match(cardRegex))
    {
            document.getElementById('cardNo').style.borderColor="red";
            document.getElementById('cardNo').style.marginBottom="45px";
            document.getElementById('cardNumError').style.display="block";
            document.getElementById('cardNumError').innerHTML = cardError2; 

            checkEverthing = false; 
    {//for vertically aligning error code 

            if(errorCoin=="only")
        {
            document.getElementById('cardNumError').style.top="175px";
        }
        else
        {
            document.getElementById('cardNumError').style.top="195";
        }

    }
            
    }
    else
    {
        document.getElementById('cardNo').style.borderColor="hsl(270, 3%, 87%)";
        document.getElementById('cardNo').style.marginBottom="25px";
        document.getElementById('cardNumError').style.display="none";
        errorCoin2="only";
       
    }



    if(newYear.length==0)
    {
        document.getElementById('YY').style.borderColor="red";
        document.getElementById('YY').style.marginBottom="43px";
        document.getElementById('dateError').style.display="block";
        document.getElementById('dateError').innerHTML = yearError1;

        checkEverthing = false;

        //matching vertical alignment of the error code
        {
            if(errorCoin=="only"&&errorCoin2=="only")
            {
                document.getElementById('dateError').style.top="270px";
            }
            else if(errorCoin=="only"||errorCoin2=="only")
            {
                document.getElementById('dateError').style.top="290px";
            }
            else
            {
                document.getElementById('dateError').style.top="310px";
            }
        }
        
    }
    else if(!newYear.match(yearRegex))
    {
            document.getElementById('YY').style.borderColor="red";
            document.getElementById('YY').style.marginBottom="45px";
            document.getElementById('dateError').style.display="block";
            document.getElementById('dateError').innerHTML = yearError2; 
            
            checkEverthing = false;

            
                
        //matching vertical alignment of the error code
        {
            if(errorCoin=="only"&&errorCoin2=="only")
            {
                document.getElementById('dateError').style.top="270px";
            }
            else if(errorCoin=="only"||errorCoin2=="only")
            {
                document.getElementById('dateError').style.top="290px";
            }
            else
            {
                document.getElementById('dateError').style.top="310px";
            }
        }
            
    }
    else
    {
        document.getElementById('YY').style.borderColor="hsl(270, 3%, 87%)";
        document.getElementById('YY').style.marginBottom="25px";
        document.getElementById('dateError').style.display="none";
    }



    if(newMonth.length==0)
    {
        document.getElementById('MM').style.borderColor="red";
        document.getElementById('MM').style.marginBottom="43px";
        document.getElementById('dateError').style.display="block";
        document.getElementById('dateError').innerHTML = monthError1;
        
        checkEverthing = false;

         //matching vertical alignment of the error code
         {
            if(errorCoin=="only"&&errorCoin2=="only")
            {
                document.getElementById('dateError').style.top="270px";
            }
            else if(errorCoin=="only"||errorCoin2=="only")
            {
                document.getElementById('dateError').style.top="290px";
            }
            else
            {
                document.getElementById('dateError').style.top="310px";
            }
        }

    }
    else if(!newMonth.match(monthRegex))
    {
            document.getElementById('MM').style.borderColor="red";
            document.getElementById('MM').style.marginBottom="45px";
            document.getElementById('dateError').style.display="block";
            document.getElementById('dateError').innerHTML = monthError2; 
            
            checkEverthing = false;

             //matching vertical alignment of the error code
        {
            if(errorCoin=="only"&&errorCoin2=="only")
            {
                document.getElementById('dateError').style.top="270px";
            }
            else if(errorCoin=="only"||errorCoin2=="only")
            {
                document.getElementById('dateError').style.top="290px";
            }
            else
            {
                document.getElementById('dateError').style.top="310px";
            }
        }

    }
    else
    {
        document.getElementById('MM').style.borderColor="hsl(270, 3%, 87%)";
        document.getElementById('MM').style.marginBottom="25px";
        document.getElementById('dateError').style.display="none";
    }
 
    //because we share come error {message box} for
    //month and year and as month come later 
    //and if year is blank and month is not then error not shown
    //so rectify this bug I mention below if statement.
    if(newMonth.length==0||newYear.length==0)
    {
        document.getElementById('dateError').style.display="block";
        document.getElementById('dateError').innerHTML = monthError1;
        checkEverthing = false;
    }
    else if((!newMonth.match(monthRegex))||(!newYear.match(yearRegex)))
    {
        document.getElementById('dateError').style.display="block";
        document.getElementById('dateError').innerHTML = monthError2;
        checkEverthing = false;
    }

    

    if(newCvc.length==0)
    {
        document.getElementById('Cvc').style.borderColor="red";
        document.getElementById('Cvc').style.marginBottom="43px";
        document.getElementById('cvcError').style.display="block";
        document.getElementById('cvcError').innerHTML = cvcError1;

        checkEverthing = false;

         //matching vertical alignment of the error code
         {
            if(errorCoin=="only"&&errorCoin2=="only")
            {
                document.getElementById('cvcError').style.top="270px";
            }
            else if(errorCoin=="only"||errorCoin2=="only")
            {
                document.getElementById('cvcError').style.top="290px";
            }
            else
            {
                document.getElementById('cvcError').style.top="310px";
            }
        }
    }
    else if(!newCvc.match(cvcRegex))
    {
            document.getElementById('Cvc').style.borderColor="red";
            document.getElementById('Cvc').style.marginBottom="45px";
            document.getElementById('cvcError').style.display="block";
            document.getElementById('cvcError').innerHTML = cvcError2;         
    
        checkEverthing = false; 

         //matching vertical alignment of the error code
         {
            if(errorCoin=="only"&&errorCoin2=="only")
            {
                document.getElementById('cvcError').style.top="270px";
            }
            else if(errorCoin=="only"||errorCoin2=="only")
            {
                document.getElementById('cvcError').style.top="290px";
            }
            else
            {
                document.getElementById('cvcError').style.top="310px";
            }
        }
    }
    else
    {
        document.getElementById('Cvc').style.borderColor="hsl(270, 3%, 87%)";
        document.getElementById('Cvc').style.marginBottom="25px";
        document.getElementById('cvcError').style.display="none";
    }


    if(checkEverthing)
    {
        document.getElementById('userArea').style.display="none";
        document.getElementById('thankYou').style.display="block";
    }

}