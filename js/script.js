let puntosUsuario = 0;
let puntosComputadora = 0;   
const piedra = document.querySelectorAll(".boton-jugada")[0];
const papel = document.querySelectorAll(".boton-jugada")[1];
const tijera = document.querySelectorAll(".boton-jugada")[2];

  piedra.addEventListener('click', () => jugar("piedra")); 
  papel.addEventListener('click', () => jugar("papel")); 
  tijera.addEventListener('click', () => jugar("tijera"));
   
  function jugar(eleccionUsuario){
    document.getElementById("empate").style.backgroundImage = "";
        let opciones = ["piedra", "papel", "tijera"];
        const eleccionComputadora = opciones[Math.floor(Math.random() * 3)]; 
        let resultado; 
        if (eleccionUsuario === eleccionComputadora)
             { resultado = 'Empate!';
              document.getElementById("imagenone").style.backgroundImage = "url('img/"+eleccionUsuario+".jpg')";
            document.getElementById("imagentwo").style.backgroundImage = "url('img/"+eleccionComputadora+".jpg')";
            document.getElementById("empate").style.backgroundImage = "url('img/empate.png')";
              } 
        else if ( (eleccionUsuario ==="piedra" && eleccionComputadora === "tijera" )
             || (eleccionUsuario === "papel" && eleccionComputadora === "piedra")
             || (eleccionUsuario === "tijera" && eleccionComputadora === "papel"))
             { resultado = '¡Ganaste!'; 
              puntosUsuario++; 
              document.getElementById("imagenone").style.backgroundImage = "url('img/"+eleccionUsuario+".jpg')";
            document.getElementById("imagentwo").style.backgroundImage = "url('img/"+eleccionComputadora+".jpg')";
             }
         else { resultado = 'Perdiste!'; puntosComputadora++; }
          document.getElementById("resultados").textContent = `Tu elección: ${eleccionUsuario} | Elección de la computadora: ${eleccionComputadora} | Resultado: ${resultado}`;
          
          const punto1 = document.getElementById("contador-usuario");
            const punto2 = document.getElementById("contador-ordenador");
            
            punto1.textContent = `Tus puntos: ${puntosUsuario}`;
            punto2.textContent = `Puntos de la máquina: ${puntosComputadora}`;
            
            
            
          }
            
            
        
        
        

        

   

