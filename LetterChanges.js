function LetterChanges(str) { 

    str = str.toLowerCase().split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i]===' ')continue; 
        str[i]=(str[i]==='z')?'a': String.fromCharCode(str[i].charCodeAt()+1);
        str[i]=(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')?str[i].toUpperCase():str[i];
    }

    return str.join(''); 
           
  }
   
  console.log(LetterChanges("hdlz "));  