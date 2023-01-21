
document.addEventListener("DOMContentLoaded", function (event) {

    let origArray = [2,3,4];

    document.getElementById("square").onclick= function () {
        let x = origArray.map(mySquare);
      
        document.getElementById("input1").value = x[0];
        document.getElementById("input2").value = x[1];
        document.getElementById("input3").value = x[2];
    };
    
    document.getElementById("cube").addEventListener("click", function () {
        let x = origArray.map(myCube);
        document.getElementById("input1").value = x[0];
        document.getElementById("input2").value = x[1];
        document.getElementById("input3").value = x[2];
        
        
    });
    
    document.getElementById("toTheFourth").addEventListener("click", function () {
        let x = origArray.map(myFourthPower)
       
        document.getElementById("input1").value = x[0];
        document.getElementById("input2").value = x[1];
        document.getElementById("input3").value = x[2];


    });
});

function mySquare(oneItem) {
    oneItem=Math.pow(oneItem,2);
    return oneItem;
}

function myCube(oneItem) {
    return oneItem= Math.pow(oneItem,3);
}

function myFourthPower(oneItem) {
    oneItem = Math.pow(oneItem,4);
    return oneItem;
}