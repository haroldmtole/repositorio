//Función para peso ideal
function calcularPesoIdeal(){
   
    //Obtenemos la edad ingresada
    var edad = document.getElementById("txt_edad").value; 
   
    //Calculamos el peso ideal usando fórmula edad*2+8
    var pesoIdeal = edad * 2 + 8;
  
    //Mostramos resultado en contenedor cnt_resultado
    document.getElementById("cnt_resultado").innerHTML ="Peso ideal es " + pesoIdeal + " kilos.";
}