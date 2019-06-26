function LetterCapitalize(str) { 

    str=str.split(' ');
    for (let i = 0; i < str.length; i++) {
        var aux=str[i].split('');
        aux[0]=aux[0].toUpperCase();
        str[i]=aux.join('');
    }

    return str.join(' '); 
           
  }
     
  console.log(LetterCapitalize("hola holi"));  