function FirstFactorial(num) { 

    // code goes here  
    if(num >=1 && num <= 18){
       if(num == 1)
          return num;
       else
        return num * FirstFactorial(num-1);
    }
    else{
        console.log("error, el rango de números permitido es de 1 - 18")
    }    
  }
     
  // keep this function call here 
  FirstFactorial(readline());