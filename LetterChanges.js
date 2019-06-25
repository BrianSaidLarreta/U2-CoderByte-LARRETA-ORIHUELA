function LetterChanges(str) { 
    var aux="";
  // code goes here
  for(i=0;i<str.length;i++){
      if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 ){
          if(str.charCodeAt(i)+1 === 97 || str.charCodeAt(i)+1 === 101 || 
             str.charCodeAt(i)+1 === 105 || str.charCodeAt(i)+1 === 111 || str.charCodeAt(i)+1 === 117 ){
                aux += String.fromCharCode(str.charCodeAt(i)+1).toUpperCase();
             }
          else{
              aux += String.fromCharCode(str.charCodeAt(i)+1);
          }    
      }else{
          aux += str.charAt(i);
      }
  }
  return aux; 
         
}
   
// keep this function call here 
LetterChanges(readline());