let email= document.getElementById("email");
let pwd= document.getElementById("pwd");

function validate(){
       
    //    if(pwd.value.trim().length<=8){
    //        alert("password is too short");
    //        pwd.style.border= "3px solid red";
    //        return false;
           
    //    } 
    //    else {
    //       return true;
    //    }

    let exp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";

    if(exp.test(pwd.value)){
        error.innerHTML ="valid";
        error.style.color="green";
        return true;

    }
    else{
        error.innerHTML ="password must contain:";
        error.style.color="red";
        return false;

    }

      
      
       
}




    
