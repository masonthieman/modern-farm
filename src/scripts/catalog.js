
// Creates an html string representing the catalog of harvested plants
export const Catalog = harvestedArray => {

    // Instantiate empty html string
    let htmlString = ""

    // Add a section component for each plant in the harvested array
    for (const plant of harvestedArray) {
        htmlString += `<section class="plant">${plant.type}</section>`
    }

    document.getElementById("catalog").innerHTML = htmlString
    // Return the catalog HTML string
    return htmlString
}