// Short circuiting is the concept in js where js does not check the second expression in a condition is accepted or declined in the first expression itself

let status = false
let name = 'Max'

let result = (status && name)
console.log(result)
// first expression itslef is false, so js will not check the value of 'name'
// if short circuiting happens: it returns the value of first expression
// if short does not happen: it returns the value of second expression


let number = 100
let r = (number > 50) || (!number%2===0)
console.log(r)
// first expression is true, so js does not care whether the second condition is true or not
// if short circuiting happens: it returns the value of first expression
// if short does not happen: it returns the value of second expression