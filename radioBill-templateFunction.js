function radioBill(){

    var callTotal2 = 0;
    var smsTotal2 = 0;


    function getCallTotal(){
        return callTotal2
    }

    function getSmsTotal(smsTotal){
        return smsTotal2;
    }

    function totalCost(){
        return callTotal2 + smsTotal2;
      }

    function addTotal(type){
        if(type === "call"){
            callTotal2 += 2.75
        }
        else if(type === "sms"){
            smsTotal2 += 0.75
        }
    }
    
    function classNameTotal() {
        if(totalCost() >= 30.00 & totalCost() < 50.00){
            return "warning"
        }
        if(totalCost() >= 50.00){
            return "danger"
        }
    }
    return {
        getCallTotal,
        getSmsTotal,
        addTotal,
        totalCost,
        classNameTotal,
    }


}
