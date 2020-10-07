/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import {useFish} from './FishDataProvider.js' 
export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer__left")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
          <h3>Fish List</h3>
          
          <div class="fishContainer">
            Placeholder for list of fish
          </div>
        </section>
    `
}