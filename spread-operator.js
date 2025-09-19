// Spread Operator : used to combine iterable data structures like array or objects.

// OJBECTS
const agent = {
    name: 'James',
    place: 'London',
    status: 'alive'
  }
  
  const origin = {
    organization: 'MI7'
  }
  
  console.log(agent)
  console.log(origin)
  
  // combining two objects into one
  const fullDetails = {...agent, ...origin}
  console.log(fullDetails)
  

  // ARRAYS
  const fruits = ['apple', 'orange' , 'grapes']
  const vegetables = ['ladyfinger', 'onion', 'potato']
  console.log(fruits)
  console.log(vegetables)
  
  // combining two of the arrays 
  const fruitsAndVegetables = [...fruits, ...vegetables]
  console.log(fruitsAndVegetables)