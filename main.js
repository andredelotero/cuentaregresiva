    let tiempoConsultado;
    
    function preguntar(){
        tiempoConsultado = parseInt(prompt("ingresa la cantidad de minutos"));
        if (!(tiempoConsultado>0 && tiempoConsultado<99)){
            alert("tenes que ingrear un numero (que sea mayor que cero y menor que 99)");
            preguntar();
        }
        return tiempoConsultado;
    }

    let tiempoMinutos = preguntar();
    let tiempoSegundos= 0;
    
    function timer(){
    tiempoMinutos= parseInt(tiempoMinutos);
    tiempoSegundos=parseInt(tiempoSegundos);
    if (tiempoSegundos>0){
        tiempoSegundos--;      
    }    
    else{
        if (tiempoMinutos>0){           
            tiempoMinutos--;
            tiempoSegundos=59;
        }
        else{
            if (tiempoMinutos==0 && tiempoSegundos==0){
                document.querySelector(".puntos").classList.remove("titila");
            }
    }
    }
    if (tiempoSegundos < 10 || tiempoSegundos == 0) {
        tiempoSegundos = '0' + tiempoSegundos;
      }
    if (tiempoMinutos < 10 || tiempoMinutos == 0) {
        tiempoMinutos = '0' + tiempoMinutos;
      }
document.querySelector(".segundos").innerHTML=tiempoSegundos;
document.querySelector(".minutos").innerHTML=tiempoMinutos;

if ((parseInt(tiempoMinutos)==0) && (parseInt(tiempoSegundos)<20)){
    document.querySelector(".cuentaAtras").classList.add("seTermina");
    document.querySelector(".titulo").innerHTML="Se terminó el recreo!!";
}
}

function dale(){
    setInterval(timer, 1000);
}