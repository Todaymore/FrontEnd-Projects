var amt=0;
var tip=0;
var eachOneTip=0;
var person=0;

function getAmount()
{
    
    let getValue = document.getElementById('billPay').value;
    amt = parseInt(getValue);
    
    if((isNaN(amt))||(amt==0))
    {
        amt=0;
    }
    else
    {
        document.getElementById('amtError').style.display="none";
    }

}

    
    


function getTip(a)
{

    tip=a;// 1. working so now people value left then work formula and 2.where to click to evaluate to answer and 3.about reset button
    document.getElementById('tipError').style.display="none";
    
}

function getCustomTip()
{
    let getValue = document.getElementById('custom').value;
    tip = parseInt(getValue);
    if((isNaN(tip))||tip==0)
    {
        tip=0;
    }
    else
    {
        document.getElementById('tipError').style.display="none";
    }
    
}

function totalPeople()
{
     let getValue = document.getElementById('people').value;
     person = parseInt(getValue);
     
     if((isNaN(person))||person==0)
     {
        person=0;
     }
     else
     {
        document.getElementById('errorPerson').style.display="none";
     }
     
     

}

function splitter()
{

    if(person==0||tip==0||amt==0)
     {

        if(person==0)
        {

           
            document.getElementById('errorPerson').style.display="inline-block";
        }
        if(amt==0)
        {
            document.getElementById('amtError').style.display="inline-block";
        }
        if(tip==0)
        {
            document.getElementById('tipError').style.display="inline-block";
        }

     }
     else
     {
        
        eachOneTip = (((amt*tip)/100)/person)
        let amt1 = amt-((amt*tip)/100);
        let perPersonAmt = ((amt1/person)+eachOneTip)
        document.getElementById('tipAmt').innerHTML = "$"+eachOneTip.toFixed(2);
        document.getElementById('totalAmt').innerHTML = "$"+perPersonAmt.toFixed(2);
        
     }
}