

let texto = document.querySelector("#texto");
let resultado = document.querySelector("#resultadotexto");
let parrafo = document.querySelector("#parrafo");
let imagenes = document.querySelector("#imagen");
let h1_titulo = document.querySelector("#h1_titulo");
let copiador= document.querySelector("#copiador");


function  encriptador() {
             
       var mensaje = texto.value;
        var encriptado  = mensaje     
             .replaceAll("e","enter")
             .replaceAll("i","imes")
             .replaceAll("o","ober")
             .replaceAll("a","ai")
             .replaceAll("u","ufat");
          
         if (encriptado.length != 0  ) {  
              
              resultado.textContent = encriptado;
              resultado.style.display = 'block';
              imagenes.style.display = 'none';
              parrafo.style.display = 'none';  
              copiador.style.display = 'block';
              h1_titulo.style.display = 'none';
             
         }else{
              alert("Se esperaba un texto...")
              resultado.textContent=""
              h1_titulo.style.display = 'block' ;
              imagenes.style.display = 'none';
              parrafo.style.display = 'none' ;
              copiador.style.display ='none';
           
            
         }
         
       
         
 }
            


        function copiar(){
          
               navigator.clipboard.writeText(resultado.textContent);
               resultado.textContent="";
          
            
              }
           
        
       function  desencriptar() {
                 
              var mensaje = texto.value;
               var desencriptar  = mensaje     
                    .replaceAll("enter","e")
                    .replaceAll("imes","i")
                    .replaceAll("ober","o")
                    .replaceAll("ai","a")
                    .replaceAll("ufat","u");
                if (desencriptar) {
                    resultado.textContent = desencriptar;
                    resultado.style.display ='block';
                    imagenes.style.display = 'none';
                    parrafo.style.display ='none';
                    h1_titulo.style.display = 'none';
                    copiador.style.display = 'block';
                    
                }
                else{
                    alert("Se esperaba un texto...")
                    resultado.textContent=""
                    h1_titulo.style.display = 'block' ;
                    imagenes.style.display = 'none';
                    parrafo.style.display = 'none' ;
                }
              
                
       }