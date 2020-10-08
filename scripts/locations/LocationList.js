/*
LocationList which renders individual location objects as HTML
*/

// import external function that provides a copy of the location array
import { returnLocationCollection } from './LocationDataProvider.js'

// import external function that holds single location HTML
import { locationHTML }           from './locationHTML.js'

// export function to build locations HTML for index.html
export const LocationList = () => {

    // get a reference to the target html element
    const targetElement = document.querySelector(".contentContainer__left")
    const locations = returnLocationCollection()

    // generate HTML for each location
    let locHTMLRep = ""
    for (const location of locations) {
        locHTMLRep += locationHTML(location)
    }
    
    // insert this HTML into element held in the value of targetElement
    targetElement.innerHTML += `
    <section class="locationList">
      <h3>Locations List</h3>
      
      <div class="locationContainer">
        ${locHTMLRep}
      </div>
  </section>
    `
}