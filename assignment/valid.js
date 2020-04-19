




 function validation(){


    var name = document.getElementById("name").value;
    var last =document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var pws= document.getElementById("pwd").value;
    var error= document.getElementById("msg2");
    var phone = document.getElementById("phone").value;
   
    var pass;
    
    let regexp1 =/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;

    if(name == "" || name.length<6){

        // document.getElementById('user').innerHTML="please fill name";
        // user.style.color= "red";
        alert('please write your name');
        return false;
    }

    if(last == "" || last.length<3){
        // document.getElementById("user1").innerHTML="please enter your last name";
        // user1.style.color= "red";
        alert('please write your last name');
        return false;
        
    }
    if(email == "" ){
        document.getElementById("msg1").innerHTML="please enter valid email";
        msg1.style.color= "red";
        alert('please enter valid email');
        return false;


    }
    
    
     

   
    
   if(pws.length== ""  || pws.length<=8){
    // var pass="please enter password";
    // msg2.innerHTML = pass;
    alert("Type your password");
    return false;
   }

   if(phone.length=="" || phone.length != 10){
    //   var text= "please enter valid phone number";
    //    msg3.innerHTML = text;
       alert("enter correct  phone number");
       return false;
   }



   if(regexp1.test(pws)){
       
      error.innerHTML = "password is good strength";
      error.style.color="green";
       return true;
   }
   else{
    error.innerHTML  = "password is weak and   must contain 8 charecters: lowercase,uppercase,number."
    error.style.color ="red";
       return false;
   }

    
 }







   


            






  