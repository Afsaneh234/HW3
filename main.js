
    let origArray=[2,3,4];


   document.addEventListener("DOMContentLoaded", function (event) {

  
      
        document.getElementById("TextBox1").value = origArray[0];
        document.getElementById("TextBox2").value = origArray[1];
        document.getElementById("TextBox3").value = origArray[2];
    
    
    document.getElementById("button2").addEventListener("click", function () {
        let x = origArray.map(myCube);
        document.getElementById("TextBox1").value = x[0];
        document.getElementById("TextBox2").value = x[1];
        document.getElementById("TextBox3").value = x[2];
        
        
    });
    
    document.getElementById("button3").addEventListener("click", button3);

   


});

function button1Function(){
  
    let x=origArray.map(square);
    document.getElementById("TextBox1").value = x[0];
    document.getElementById("TextBox2").value = x[1];
    document.getElementById("TextBox3").value = x[2];


}
function button3(){
    let x=origArray.map(four);
    document.getElementById("TextBox1").value = x[0];
    document.getElementById("TextBox2").value = x[1];
    document.getElementById("TextBox3").value = x[2];
}

function square(item){

    let x= item **2;
    return x;
}

function myCube(item) {
     let x=item **3;
     return x;
}

function four(item) {
    let x = item ** 4;
    return x;
}

