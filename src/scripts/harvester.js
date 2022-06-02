// Creates a havested array based on the output of each plant planted
export const harvestPlants = plantArray => {
    // Instantiates an empty harvested array
    let harvestArray = []

    // Iterate through each plant of the planted array
    for (const plant of plantArray) {

        // Account for planted corn
        if (plant.type === "Corn" ) {
            // Add half of the output of plant to the harvested plants array
            for (let i=0; i < plant.output / 2; i++) {
                harvestArray.push(plant);
            }
        }

        else {
            // Add the output of each plant that is not of type "corn"
            for (let i=0; i < plant.output; i++) {
                harvestArray.push(plant)
            }
        }
    }
    // Return the newly created "harvested" array
    return harvestArray
}