

const a = {id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99, quantity: 2}

const b ={...a,quantity:(a.quantity+1)}

console.log(b)