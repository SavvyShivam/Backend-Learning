function calculateCube(number){
    console.log(number*number*number)
}

function calculateSquare(number) {
    console.log(number*number)
}

// exporting multiple functions - pass as an object
module.exports = {calculateCube,calculateSquare} 