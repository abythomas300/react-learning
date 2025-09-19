let originalNumber = 100
let copy = originalNumber // copy of 'orignalNumber'is passed
copy += 100
console.log('ORIGINAL NO: ', originalNumber)
console.log('copy: ', copy)

let originalObject = {
  name: 'John', 
  age: 55
}

let objectCopy = originalObject  // actual reference(memory address) of 'originalObject' is passed
objectCopy.address = "new york"
console.log('og object: ', originalObject)
console.log('obj copy: ', objectCopy)

let ogArray = [100, 200, 300, 400]
let copyArray = ogArray  // reference is passed
copyArray.push(-9999)
console.log('og array: ', ogArray)
console.log('og array: ', copyArray)