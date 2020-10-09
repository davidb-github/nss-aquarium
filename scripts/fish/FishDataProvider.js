/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        img: "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
        name: "holy-fish-1",
        species: "Blue Fin",
        length: 3,
        location: "Costa Rica",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1576806021995-9f68eb39f10b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",
        name: "holy-fish-2",
        species: "Green Fin",
        length: 6,
        location: "Florida",
        food: "Carnivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "holy-fish-3",
        species: "Yellow Fin",
        length: 9,
        location: "Mexico",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "soldier-fish-1",
        species: "Yellow Fin",
        length: 90,
        location: "Mexico",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "soldier-fish-3",
        species: "Yellow Fin",
        length: 155,
        location: "Mexico",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "soldier-fish-4",
        species: "Yellow Fin",
        length: 155,
        location: "Mexico",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "common-fish-1",
        species: "Yellow Fin",
        length: 2,
        location: "Mexico",
        food: "Herbivore"
    }
]

export const useFish = () => {
    return fishCollection.slice();
}