function SimpleAdding(num) { 

  // code goes here
  if(num >= 1 && num <= 1000){
      if(num === 1){
          return 1;
      }else{
          return num + SimpleAdding(num-1);
      }
  }else{
      console.log("El rango de número debe ser de 1 a 1000");
  }
  
         
}
   
// keep this function call here 
SimpleAdding(readline());   