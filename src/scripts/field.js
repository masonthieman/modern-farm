// Instantiate an empty array to add growing plants
let growingPlants = []

// Adds a single plant object to the growing plants array
export const addPlant = (seedObj) => {
    growingPlants.push(seedObj)
}

// Getter function to return the array of growing plants
export const usePlants = () => {
    return growingPlants
}