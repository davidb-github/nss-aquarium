/**
 *  FishList which renders individual fish objects as HTML
 */

// depends on fish for html and provider for fish object data
import { useFish } from './FishDataProvider.js' //what the fish should look like in html
import { Fish } from './Fish.js'                // the actual fish data

//get data and turn it into html and put it on the page
export const FishList = () => {
debugger
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer__left")
    const fishes = useFish()

    // Generate individual fish HTML representations
    let fishHTMLRepresentations = ""          //var to hold a string of html elements
    for (const fish of fishes) {              // for each javascript object, turn into html 
      fishHTMLRepresentations += Fish(fish)   //fish should look like this
    }

    // Add to the existing HTML in the content element with ref to element we're adding fish to.
    contentElement.innerHTML += `
        <section class="fishList">
          <h3>Fish List</h3>
          
          <div class="fishContainer">
            ${fishHTMLRepresentations}
          </div>
        </section>
    `
}