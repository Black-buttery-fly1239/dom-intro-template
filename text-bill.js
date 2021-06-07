function textBill(){

    var callTotal1 = 0;
    var smsTotal1 = 0;

    function getCallTotal(){
        return callTotal1
    }

    function getSmsTotal(smsTotal){
        return smsTotal1;
    }

    function totalOne(){
        return callTotal1 + smsTotal1;
      }

    function addTotal(type){
        if(type === "call"){
            callTotal1 += 2.75
        }
        else if(type === "sms"){
            smsTotal1 += 0.75
        }
    }
    
    function classTotal() {

        if(totalOne() >= 50.00){
            return "danger"
        }
        if(totalOne() >= 30.00){
            return "warning"
        }
      
        
        
    }

    return {
        getCallTotal,
        getSmsTotal,
        addTotal,
        totalOne,
        classTotal,
    }


}