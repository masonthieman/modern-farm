import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


// Function that calls on createPlant and addPlant functions to make the planted array
export const plantSeeds = planObj => {
    // Iterates through each row of the given plan parameter
    for (let row of planObj) {
        
        // Iterates through each column of a row
        for (let column of row) {
            
            // Adds the plant to the "planted" array based on its type
            if (column === "Potato") {
                addPlant(createPotato())
            }
            else if (column === "Soybean") {
                addPlant(createSoybean())
            }
            
            // Extract both corn plants from its array and add each to the "planted" array
            else if (column === "Corn") {
                const cornArray = createCorn();
                addPlant(cornArray[0]);
                addPlant(cornArray[1]);
            }

            else if (column === "Asparagus") {
                addPlant(createAsparagus())
            }

            else if (column === "Wheat") {
                addPlant(createWheat())
            }

            else {
                addPlant(createSunflower())
            }
        }
    }
}