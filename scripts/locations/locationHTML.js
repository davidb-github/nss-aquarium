/**
 *  Fish which renders individual fish objects as HTML
 */
export const locationHTML = (locationObj) => {
    return `
        <section class="location__card">
            <div><img  class="location__image image--card" src="${locationHTML.img}" /></div>
            <div class="fish__name">${locationObj.country}</div>
            <div class="fish__species">${locationObj.season}</div>
        </section>
    `
}