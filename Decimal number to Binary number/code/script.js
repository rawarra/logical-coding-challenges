function decimalToBinary (decimalNumber){
    //handel the edge case for 0
    if(decimalNumber === 0){
        return "0";
    }
    let binaryResult = "";
    let number = decimalNumber;
    
    //1. Find the largest power of 2 that is less than or equal to the number
    let placeValue = 1;

    while(placeValue <= number){
        placeValue*=2;
    }

    // move bac one step to get the exact staring place value

    placeValue /=2;

    // 2. Run the shortcut method 
    while(placeValue > 0){
        if(number>=placeValue){
            binaryResult += "1"; 
            number -= placeValue;
        }else{
            binaryResult += "0";
        }
        placeValue = Math.floor(placeValue / 2);
    }

    return binaryResult;
}

console.log(decimalToBinary(20));
console.log(decimalToBinary(31));
console.log(decimalToBinary(40));
console.log(decimalToBinary(166));


function showBinaryResult(){
    const inputValue = document.getElementById("decimalInput").value;
    const resultDiv = document.getElementById("result");

    // validation check 

    if(inputValue === ""){
        resultDiv.style="red";
        resultDiv.innerHTML = "Please Enter a valid number!";
        return;
    }

    const decimalNum = parseInt(inputValue, 10);
    const binaryOutput = decimalToBinary(decimalNum);
console.log(binaryOutput);
    resultDiv.style.color = "#28a745";
    resultDiv.innerHTML = "Binary Value : " + binaryOutput;


}