// Import module functions
import { createPlan } from './plan.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'

// Create the yearly plan 2D array with the provided function
const yearlyPlan = createPlan()

// Create the planted seeds array based on the plan array
const plantedSeeds = usePlants(plantSeeds(yearlyPlan))

// Harvest planted seeds and create a harvested plant array
const harvestedPlants = harvestPlants(plantedSeeds)

// Display a catalog of the harvested plants
Catalog(harvestedPlants)

