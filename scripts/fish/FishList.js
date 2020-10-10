/**
 *  FishList which renders individual fish objects as HTML
 */
// depends on fish for html and provider for fish object data
import { commonFish, mostHolyFish, soldierFish } from './FishDataProvider.js' // the actual fish data
import { Fish } from './Fish.js'                                              //what the fish should look like in html

// build HTML for given array of fish objects
const buildFishHTML = (arrayOfFish) => {
  let fishHTMLRepresentations = ""         //var to hold a string of html elements
  for (const fish of arrayOfFish) {      // for each javascript object, turn into html 
    fishHTMLRepresentations += Fish(fish)  //fish should look like this
  }

  return fishHTMLRepresentations
}


//get data and turn it into html and put it on the page
export const FishList = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".contentContainer__left")

  // holyFish
  // populate holyfish var with value of fish objects returned by mostHolyFish() function call    
  const holyFish = mostHolyFish()
  // call buildFishHTML and pass holyFish as argument and store return value in holyFishHTML
  const holyFishHTML = buildFishHTML(holyFish)

  // soldierFish
  const soldierFishes = soldierFish()
  const soldierFishHTML = buildFishHTML(soldierFishes)

  // commonFish
  const commonFishes = commonFish();
  const commonFishHTML = buildFishHTML(commonFishes);

  // Add to existing HTML;  target is inside the element value of contentElement
  contentElement.innerHTML += `
        <section class="fishList">
          <h3>Fish List</h3>
          
          <div class="fishContainer">
            ${holyFishHTML}
            ${soldierFishHTML}
            ${commonFishHTML}
          </div>
        </section>
    `
}