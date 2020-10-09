/**
 *  FishList which renders individual fish objects as HTML
 */

// depends on fish for html and provider for fish object data
import { mostHolyFish, soldierFish } from './FishDataProvider.js' //what the fish should look like in html
import { Fish } from './Fish.js'                                  // the actual fish data

const buildFishHTML = (arrayOfFish) => { 
    // Generate individual fish HTML representations
    let fishHTMLRepresentations = ""         //var to hold a string of html elements
    // arrayOfFish is whatever argument passed into the parameter when calling buildFishHTML
    for (const fish of arrayOfFish) {        // for each javascript object, turn into html 
      fishHTMLRepresentations += Fish(fish)  //fish should look like this
    }

    return fishHTMLRepresentations
}


//get data and turn it into html and put it on the page
export const FishList = () => {
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer__left")
    // populate holyfish var with value of fish objects returned by mostHolyFish() function call    
    const holyFish = mostHolyFish()
    // call buildFishHTML and pass holyFish as argument and store return value in holyFishHTML
    const holyFishHTML = buildFishHTML(holyFish)
    

    // Add to the existing HTML in the content element with ref to element we're adding fish to.
    contentElement.innerHTML += `
        <section class="fishList">
          <h3>Fish List</h3>
          
          <div class="fishContainer">
            ${holyFishHTML}
          </div>
        </section>
    `
}