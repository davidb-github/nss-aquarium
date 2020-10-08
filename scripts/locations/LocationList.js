/*
LocationList which renders individual location objects as HTML
*/

// import our external function that provides a copy of the location array
import { returnTravelCollection } from './LocationDataProvider.js'

// export function to build locations HTML for index.html
export const LocationList = () => {

    // get a reference to the target html element
    const targetElement = document.querySelector(".contentContainer__left")

    // populate local-scoped array with copy of our locations array
    locationsArray = returnTravelCollection()

    // insert this HTML into element held in the value of targetElement
    targetElement.innerHTML += `
    <article class="locationList">
      All the locations go here!
    </article>
   `
}