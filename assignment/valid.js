
function valid(){
    var pass = document.getElementById("pwd");
    var phone = document.getElementById("mob");
    var fName = document.getElementById("name");
    var lName = document.getElementById("last");
        if(fName){
           nameValid();
        }
        if(lName){
           lastValid()
        }
        if(pass){
           passValid();
        }
        if(phone){
           return phoneValid();
        }
        

    
    
    
        function nameValid(){
            var letters = /^[a-zA-Z ]{5,20}$/;
            if(fName.value.match(letters)){
                alert("valid username"); 
                return true;
            }
            else{
                alert("username must greater than 5 letters");
                return false;
            }

        }  
        function lastValid(){
            if(lName.length>4){
                alert("valid last name");
                return true;
            }
            else{
                alert("last name atleast contain 4 letters");
                return false;
            }
        }      




    function passValid() { 
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
            if(pass.value.match(passw)){ 
                document.getElementById("msg2").innerHTML = "** Strong Password **";
                document.getElementById("msg2").style.color = "Green";
                return true;
            }
            else{ 
                    alert("password between 7 to 15 characters which contain at least one numeric digit and a special character");
                    document.getElementById("msg2").innerHTML = "** Weak Password **";
                    document.getElementById("msg2").style.color = "red";
                    return false;
            }

}

    function phoneValid(){
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
            if(phone.value.match(phoneno)){
                // alert("valid phone number");
                document.getElementById("msg3").innerHTML = "** valid  phone number **";
                document.getElementById("msg3").style.color = "green";
                return true;
            }
             else{
            // alert(" valid  phone number like XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX")
                document.getElementById("msg3").innerHTML = "** valid  phone number like XXX XXX XXXX **";
                document.getElementById("msg3").style.color = "red";
                return false;
            }

    
    }




}





 






   


            






  