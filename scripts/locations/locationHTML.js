/**
 *  Fish which renders individual fish objects as HTML
 */
export const locationHTML = (locationObj) => {

    return `
        <section class="location__card">
            <div class="country__name">${locationObj.country}</div>
            <div class="country__season">${locationObj.season}</div>
        </section>
    `
}