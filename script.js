
var box = document.getElementById("display-box");

function addToScreen(x){
    box.value += x;
    if(x=="c"||x=="C"){
      box.value="";
    }    

}


function answer(){
  x=box.value;
  x=eval(x);
  box.value=x;
}

function backspace(){
  var x = box.value;
  var lengthAfterDeletion= x.length-1;
  var newNumbers = x.substring(0,lengthAfterDeletion);
  box.value = newNumbers;
  
}

