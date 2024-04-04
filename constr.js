
function Car(name, model, year, colour, cooling){
    this.name = name
    this.model = model
    this.year = year
    this.colour = colour
    this.cooling = cooling
    
}

const oko = new Car('Toyota','Echo', '2005', 'Black', 'Air Conditioner')

// console.log(oko)
console.log(oko.name, oko.model ,oko.year, oko.colour, oko.cooling);