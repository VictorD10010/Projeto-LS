

function convmoedas(e){
  e.preventDefault();

  let valor=document.querySelector('#input1').value;
  let i2=document.querySelector('#i2').value;
  let i3=document.querySelector('#i3').value;
  let i4=document.querySelector('#i4');

  /*Dolar para Real/Dolar para Euro/Dolar para Iene Japones*/
  if (i2==0 && i3==1){
    i4.innerHTML=`R$${valor* 5.25}`;
  }else if(i2==0 && i3==2){
    i4.innerHTML=`€${valor* 0.85}`;
  }else if(i2==0 && i3==3){
    i4.innerHTML= `¥${valor* 109.98}`;
  }
  /*Real para Dolar/Real para Euro/Real para Iene*/
  if (i2==1 && i3==0){
    i4.innerHTML= `$${valor* 0.19}`;
  }else if(i2==1 && i3==2){
    i4.innerHTML= `€${valor* 0.16}`;
  }else if(i2==1 && i3==3){
    i4.innerHTML= `¥${valor* 21.22}`;
  }
  /*Euro para Dolar/Euro para Real/Euro para Iene*/
  if (i2==2 && i3==0){
    i4.innerHTML= `$${valor* 1.18}`;
  }else if(i2==2 && i3==1){
    i4.innerHTML= `R$${valor* 6.12 }`;
  }else if(i2==2 && i3==3){
    i4.innerHTML= `¥${valor* 129.72}`;
  }
  /*Iene para Dolar/Iene para Real/Iene para Euro*/
  if (i2==3 && i3==0){
    i4.innerHTML= `$${valor* 0.0091}`;
  }else if(i2==3 && i3==1){
    i4.innerHTML= `R$${valor* 0.047}`;
  }else if(i2==3 && i3==2){
    i4.innerHTML= `€${valor* 0.0077}`;
  }
  
  /*Se o numero for negativo,ficará "Resultado"*/
  if(valor<0){
    document.getElementById('i4').innerHTML=  'Resultado';
  }

}
function convmedidas(f){
  f.preventDefault();

  const valor=document.getElementById('input6').value;
  const i5=document.getElementById('i5').value;
  const i7=document.getElementById('i7').value;
  const i8=document.getElementById('i8');
  const medida=[valor];

  /*Metros para Centímetros/Metros para Milimetros/Metros para Quilômetros*/
  if(i5==0 && i7==1){
    i8.innerHTML= `${(medida.map((value) => value * 100))}cm`;
  }else if(i5==0 && i7==2){
    i8.innerHTML= `${(medida.map((value) => value * 1000))}mm`;
  }else if(i5==0 && i7==3){
    i8.innerHTML= `${(medida.map((value) => value / 1000 ))}km`;
  }

  /* Milimetros para metros / Milimetros para CM/ Milimetros para KM*/
  if (i5==2 && i7==0){
    i8.innerHTML=`${(medida.map((value) => value / 1000))}m`;
  }else if (i5==2 && i7==1){
    i8.innerHTML=`${(medida.map((value) => value / 10))}cm`;
  }else if (i5==2 && i7==3){
    i8.innerHTML=`${(medida.map((value) => value / 1000000))}km`;
  }
/* KM para Metros / KM para CM / KM para Milímetros*/  
  if  (i5==3 && i7==0){
    i8.innerHTML=`${(medida.map((value) => value * 1000))}m`;
  }else if  (i5==3 && i7==1){
    i8.innerHTML=`${(medida.map((value) => value * 100000))}cm`;
  }else if  (i5==3 && i7==2){
    i8.innerHTML=`${(medida.map((value) => value * 1000000))}mm`;
  }
/* Centímetros*/
  if  (i5==1 && i7==0){
    i8.innerHTML=`${(medida.map((value) => value / 100))}m`;
  }else if  (i5==1 && i7==2){
   i8.innerHTML=`${(medida.map((value) => value * 10))}mm`;
  }else if  (i5==1 && i7==3){
    i8.innerHTML=`${(medida.map((value) => value / 100000))}km`; 
  }
}