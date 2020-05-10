function prime(){

    let num = [2,3,4,5];
    // console.log(num[1]);
    
    for(var i=2; i<num[1]; i++){
        if(num[1]%i !==0){
            document.getElementById("para1").innerHTML =  num[1]+ "   is a prime number" ;
            document.getElementById("para1").style.color ="green";
            return true;
        }
        else{
            document.getElementById("para1").innerHTML =  num[1]+  "   is not a prime number" ;
            document.getElementById("para1").style.color ="red";
            return false;
        }

    }
   
}

function frequent(){
    let fre = [8,10,12,8,5,3];
    for(var i=0;i<fre.length;i++){
        for(var j=0;j<fre.length;j++){
            if(fre[0] == fre[j]){
            // console.log("is most  frequent item");
            document.getElementById("para2").innerHTML =    "most frequent number is   " +fre[0];
            document.getElementById("para2").style.color ="green";
            return true;
            }
            else{
                // console.log("is not frequent");
                document.getElementById("para2").innerHTML =  fre[0]+  "   is  not a frequent number"  ;
                document.getElementById("para2").style.color ="red";
                return false; 
            }
        }
    }

}


function swap(){

    let x = document.getElementById("text1").value ;
    let c= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let s= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let a=x.split("",50);
    console.log(a);
    



    
    
    
    


}


function arraySquare(){
    let array= [1,2,3,4,5];
    var out= " ";
    for(var k=0; k<array.length; k++){
        console.log(array[k]);
        out = array[k]*array[k];
        console.log(out);
        document.write("<br>"+out+"<br>");
    }
}



function oddEven(){

    for(var i=1; i<16; i++){
        var x= i;
        console.log(i);
        document.write("<br>"+i+"<br>");
        if(i%2 == 0){
             console.log("is even");
            document.write("is even");
            
        }
        else{
             console.log("is odd");
             document.write("is odd");
            
           
        }
    }

}
function truncate(){
    var x= document.getElementById("text2").value;
    if(x.length>=10){
        document.getElementById("para6").innerHTML = "the length is greater than 10";
        return true;
    }
    else{
        document.getElementById("para6").innerHTML = "the length is less than 10";
        return false;
    }
}



function findLarge(a,b){

    if(a>b){
        document.getElementById("para7").innerHTML = a+ " is greater";
        return true;
    }
    else{
        document.getElementById("para7").innerHTML = b+ " is greater";
    }
}



function star(){

    var row= 4;
    var output="";
    for(var i = 1; i <= row; i++){
        for (var j = 1; j <= i; j++) {
          output  += "*"  ;
          
        } 
        console.log(output);
        document.write("<br>"+output+ "<br>");
        output= '';
    }
}

function java(){
    var arr = ["J","A","V","A"]
    var rows= 4;
    var output= "";
    for(var i=1; i<=rows; i++){
        for(var j=0; j<rows; j++){
            output += arr[j];
            // console.log(output);
            document.write("<br>"+output+"<br>")
        }
        output="";
    }
}

