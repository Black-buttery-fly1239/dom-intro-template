var radio = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")


 var callTotalTwo = document.querySelector(".callTotalTwo")
 var smsTotalTwo = document.querySelector(".smsTotalTwo")
 var totalTwo = document.querySelector(".totalTwo")

 var radioInstance = radioBill()

 var radioTSource = document.querySelector(".userTemplate").innerHTML;
var radioTemplate = Handlebars.compile(radioTSource);

function checkedRadioBtn(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value;

    if(billItemType){
     radioInstance.addTotal(billItemType)
    }
  
    callTotalTwo.innerHTML = radioTemplate({callTotal:radioInstance.getCallTotal().toFixed(2)});
    smsTotalTwo.innerHTML = radioTemplate({smsTotal:radioInstance.getSmsTotal().toFixed(2)});
    totalTwo.innerHTML = radioTemplate({Total:radioInstance.totalCost().toFixed(2)});
  
    totalTwo.classList.add(radioInstance.classNameTotal())
    
}

 
radioBillAddBtn.addEventListener('click',checkedRadioBtn);