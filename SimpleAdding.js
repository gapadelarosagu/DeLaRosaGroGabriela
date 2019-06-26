function SimpleAdding(num) { 

    if(num<=0||num>1000){
        return 0;
    }
    return num+SimpleAdding(num-1);
  
           
  }

  console.log(SimpleAdding(12));                            
  