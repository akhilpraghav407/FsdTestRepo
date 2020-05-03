function valid(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            console.log(response);
            var jgrocery = response.grocery;
            console.log(jgrocery);

            var output = "";
            var output2 = "";
            var output3 = "";
            var output4 = "";
            var output5 = "";
            var output6 ="";
            for(var i=0;i<jgrocery.length;i++){
                output += "<h4>"+jgrocery[i].SerialNo +"</h4>";
                output2 += "<h4>"+jgrocery[i].Name +"</h4>";
                output3 += "<h4>"+jgrocery[i].Quantity +"</h4>";
                output4 += "<h4>"+jgrocery[i].Unit+"</h4>";
                output5 +="<h4>"+jgrocery[i].Department+"</h4>";
                output6 +="<h4>"+jgrocery[i].Notes+"</h4>";
            }
            document.getElementById("data1").innerHTML= output;
            document.getElementById("data2").innerHTML= output2;
            document.getElementById("data3").innerHTML= output3;
            document.getElementById("data4").innerHTML= output4;
            document.getElementById("data5").innerHTML= output5;
            document.getElementById("data6").innerHTML= output6;

           
           

            
        }

    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}