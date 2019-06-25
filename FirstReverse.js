function FirstReverse(str) { 
    var aux="";
   // code goes here  
   for(i=str.length-1;i>=0;i--){
         aux += str.charAt(i);   
   }
   return aux; 
          
 }
    
 // keep this function call here 
 FirstReverse(readline());