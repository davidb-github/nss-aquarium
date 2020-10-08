// import 
import { Tip } from './Tip.js'
import { useTips } from './TipDataProvider.js'

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer__left")
    const tips = useTips()

    //generate all of the HTML for each tip
    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)

    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
    <section class="fishList">
      <h3>Tip List</h3>
      
      <div class="fishContainer">
        ${tipHTMLRepresentations}
      </div>
  </section>
    `
}

