const txts = document.querySelector(".informacion").children;
         txtsLen= txts.length;
 let   index = 0;

 const item = document.querySelector('.navBar').children;

    // Funciones para los botones inferiores. //

     function adelantar(){

        item[index].classList.remove("subrayar");

        txts[index].classList.remove("text-in");

        if(index >= txtsLen -1){
            index = 0;
        }else {
            index++;
        }
        txts[index].classList.add("text-in");

        item[index].classList.add("subrayar");

     }
     
     
     function atrasar(){

        item[index].classList.remove("subrayar");

        txts[index].classList.remove("text-in");
        if(index <= 0){
            index = txtsLen - 1;
        }else {
            index--;
        }
        txts[index].classList.add("text-in");

        item[index].classList.add("subrayar");

     }
     
const buttonD = document.querySelector('.derecha');

    buttonD.addEventListener("click", function(){
        adelantar();
})

const buttonI = document.querySelector('.izquierda');

    buttonI.addEventListener("click", function(){
        atrasar();
})

     // Botones del Navegador //

     item[0].addEventListener('click', function(){
        item[index].classList.remove("subrayar");

        txts[index].classList.remove("text-in");

        txts[0].classList.add("text-in");

        item[0].classList.add("subrayar");

        index = 0;
     })

     item[1].addEventListener('click', function(){
        item[index].classList.remove("subrayar");

        txts[index].classList.remove("text-in");

        txts[1].classList.add("text-in");

        item[1].classList.add("subrayar");

        index = 1;
     })

     item[2].addEventListener('click', function(){
        item[index].classList.remove("subrayar");

        txts[index].classList.remove("text-in");

        txts[2].classList.add("text-in");

        item[2].classList.add("subrayar");

        index = 2;
     })
     item[3].addEventListener('click', function(){
        item[index].classList.remove("subrayar");

        txts[index].classList.remove("text-in");

        txts[3].classList.add("text-in");

        item[3].classList.add("subrayar");

        index = 3;
     })

// Navbar responsive. //    

const botonNav = document.getElementById("responsiveButton");
const navBarResponsive = document.querySelector(".navBar");

// Funcion para el display del navbar.//

addEventListener("resize", function(){
   if(window.innerWidth > 610) {
      navBarResponsive.style.display = "flex";
   } else {
      navBarResponsive.style.display = "none"
   }
});

     if(window.innerWidth > 610){
      navBarResponsive.style.display = "flex";
     } else {
      navBarResponsive.style.display = "none"
     }

botonNav.addEventListener("click", function(){
   
   if(navBarResponsive.style.display == "none"){
      navBarResponsive.style.display = "flex";
   } else {
      navBarResponsive.style.display = "none";
   }
   
})

function nada(){
}



window.onload=nada, atrasar, adelantar;




