function KaprekarsConstant(num) { 
    var goal=6174;
    var cont=0;
    while(true){
        cont++;
        var min=num.toString().split('').sort();
        var max=min.slice().reverse();
        var menor=parseInt(min.join('',10));
        var mayor=parseInt(max.join(''),10);
        if (mayor<1000) {
            mayor=mayor*10;
        }
        num=mayor-menor;
        if (num===goal) {
            return cont;
        }
    }      
  }
     
  console.log(KaprekarsConstant(9831));    