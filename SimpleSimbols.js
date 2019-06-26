function SimpleSymbols(str) {  
    //str='='+str+"=";
    if (str===''|| str==null) {
        return false;
    }
    str=str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-zA-Z]/i)!==null) {
            if(str[i-1]!='+'||str[i+1]!='+'){
                return false;
            }
        }
        
    }
    return true; 
  }
     
  console.log(SimpleSymbols('==+a+a+b+c+=='));  