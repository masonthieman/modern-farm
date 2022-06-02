import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { addPlant, usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'

const yearlyPlan = createPlan()

const plantedSeeds = usePlants(plantSeeds(yearlyPlan))

console.log(plantedSeeds)
console.log(harvestPlants(plantedSeeds))
