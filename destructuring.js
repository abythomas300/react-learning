const cloth = {
    name: "adidas",
    type: "t-shirt",
    color: "pink"
  }
  
const fruits = ['apple', 'green', 'blue']
  
// NORMAL METHOD:
// const name = cloth.name
// const type = cloth.type
// const color = cloth.color
// console.log(name, type, color)
  
// const firstFruit = fruits[0]
// const secondFruit = fruits[1]
// const thirdFruit = fruits[2]
// console.log(firstFruit, secondFruit, thirdFruit)
  
  
// DESTRUCTURING METHOD (object and array)
const {name, type, color} = cloth 
console.log(name, type, color)

const [firstFruit, secondFruit, thirdFruit] = fruits
console.log(firstFruit, secondFruit, thirdFruit)