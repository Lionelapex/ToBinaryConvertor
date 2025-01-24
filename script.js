// start 
const inputNumber = document.getElementById('inputNumber');

const binaryOutput = document.getElementById('binaryOutput');

const button = document.querySelector('button');






// validate the number
const IsNumberValid = (input) => {

    // convert the string to number
    const number = Number(input.valueOf()); 

  if (isNaN(number)) {
    
    return console.log('Please enter a valid number');

    } else {
        return input 
         
        

  }
}




// convert the number to binary
const convertToBinary = (binary) => {
const binaryList=[]

while (binary>0){
  binaryList.unshift(binary%2)
  binary = Math.floor(binary/2)

}
return binaryList
}
  


button.addEventListener('click', () => {
// check if the number is valid
const validNumber =IsNumberValid(inputNumber.value);

const binaryNumber = convertToBinary(validNumber)


  binaryOutput.textContent=binaryNumber
  

})
  


  