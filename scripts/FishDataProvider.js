/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bubbles",
        speicies: "Blue Fin",
        length: 3.5,
        location: "Costa Rica",
        food: "crustaceans"
    },
    {
        name: "Bubba",
        speicies: "Blue Fin",
        length: 3.5,
        location: "Costa Rica",
        food: "crustaceans"
    },
    {
        name: "Carl",
        speicies: "Blue Fin",
        length: 3.5,
        location: "Costa Rica",
        food: "crustaceans"
    }
]

export const useFish = () => {
    return fishCollection.slice();
}