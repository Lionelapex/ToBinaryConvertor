// start 
const inputNumber = document.getElementById('inputNumber');


const input = inputNumber



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

// check if the number is valid
const validNumber =IsNumberValid(input);


// convert the number to binary
const convertToBinary = (binary) => {
const binaryList=[]

while (binary>0){
  binaryList.unshift(binary%2)
  binary = Math.floor(binary/2)

}
return binaryList
}
  // convert the number to binary
  
  const binary = convertToBinary(validNumber)



  // CREATE A FUCTION TO DISPLAY THE BINARY NUMBER


  // CREATE A FUNCTION TO DISPLAY THE BINARY NUMBER WHEN THE NUMBER IS BEING TYPED IN REAL TIME
  S