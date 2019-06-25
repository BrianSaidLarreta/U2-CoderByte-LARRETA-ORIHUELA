function SimpleSymbols(str) { 

    // code goes here  
      if(str !== ""){
          var aux = /((\+)+(\=)*[a-zA-Z0-9]+(\+)+((\=)*(\+)*)*)+\w?/;
          var a = aux.test(str);
          return  a;
      }else{
        console.log("La cadena no debe ser vacía");
      }
      
           
  }
     
  // keep this function call here 
  SimpleSymbols(readline());