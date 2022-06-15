var btn= document.getElementById('btn'),
    caja= document.getElementById('caja'),
    contador=1;





function cambio ()

{
  if(contador==0)
    {
      
      contador=1;
      document.getElementById("btn").innerHTML= "traducir a  zapoteco";
      document.getElementById("caja").innerHTML= 
      "Somos un grupo de familias productoras que trabajan todos los dias en el campo para ofrecerte a ti y tu familia alimentos de calidad, frescos y saludables. <br> En Bixhana nos esforzamos día con día en cuidar el bienestar de nuestras gallinas libres de jaula. <br> Con tu compra contribuyes a mejorar la calidad de vida de nuestras familias.<br> Juntos podemos mejorar la vida de millones de gallinas comprando solo productos que provengan de sistemas libres de jaula.";
      document.getElementById("saludo-page").innerHTML="Gracias!<br>Por elegir:";
    }
  else {
    
    contador=0;
    
    document.getElementById("btn").innerHTML= "traducir a español";
    document.getElementById("caja").innerHTML= 
    "Laanu\' nacanu binni runi dxi\'ña hrañaa, guirá dxi rica\'lonu gapanu\' ca xpere sti\'nú ti guibanicame galán.<br> Cadi bere dagu yoo la\'came, napanu\' layú nachiaa ti ganda isaacame ne hroocame guendaró nayaa ne nazaaca.\n Gusi\' dxita xpere nu, ti ganda guibanicame sicarú, ne gacanelú ca binni runi dxi\'ña hra Bixhana, ne ca binnilixdicabe.<br> Hra Bixhana cayuninu\' neza hri\' ti gapanu ti guixilayú nayeche…ti guendanabani  nga ni jma\'risaca!";
    document.getElementById("saludo-page").innerHTML="Xquixhe pe lii<br>ti bio\'la\'dxu\':";
    }
}


btn.addEventListener('click',cambio,false);


function rand(n){
    // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
     return(Math.floor(Math.random() * n + 1 ));
    }
    //guardas imagenes en el array
    var cambia_imagen = new Array();
    cambia_imagen[0] = "1.png";
    cambia_imagen[1] = "2.png";
    cambia_imagen[2] = "3.png";
    cambia_imagen[3] = "4.png";
    cambia_imagen[4] = "5.png";
    cambia_imagen[5] = "6.png";
    cambia_imagen[6] = "7.png";

    
    
    
    //la función para que al clickear establezca el source del tag imagem que tiene id "ia" (Imagen aleatoria)
    //como no son tantas, puede que alguna vez se repita 2 veces la misma
    //incluso, si usamos numeros para las imágenes, la script puede ser más sencilla
    
    
    function cambiar(){
         document.getElementById("ia").src = cambia_imagen[rand(6)-1];
    }



