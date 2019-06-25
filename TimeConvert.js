function TimeConvert(num) { 

    // code goes here
    var aux1,aux2;
    aux1 = num % 60;
    aux2 = (num - aux1)/60
    return aux2+":"+aux1; 
           
  }
     
  // keep this function call here 
  TimeConvert(readline());