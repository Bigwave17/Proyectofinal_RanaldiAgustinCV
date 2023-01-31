    
   var fondo = document.getElementById("fondo-general");
   var boton = document.createElement("button");
    boton.innerHTML = "cambiar color fondo";
    boton.value = "rgb(5, 142, 184)";
   var saludo = document.createElement("div");
    saludo.innerHTML= "Gracias por su atencion...";
    saludo.style.fontWeight = "bold";
   var datos = document.getElementById("fondos");

    fondo.appendChild(boton);

   boton.addEventListener("click",function(){
     if(this.value == "rgb(5, 142, 184)"){
       datos.style.backgroundColor = "red";
      this.value = "red";
     }else{
      datos.style.backgroundColor = "rgb(5, 142, 184)";
      this.value = "rgb(5, 142, 184)";      
     }
     fondo.appendChild(saludo);
    }
    ,false);
